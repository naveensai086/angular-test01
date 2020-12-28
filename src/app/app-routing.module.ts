import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Component } from './home/parent1/parent1.component';
import { Parent2Component } from './home/parent2/parent2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
 
  { path: 'parent1', component: Parent1Component },
  { path: 'parent2', component: Parent2Component },
  { path: '', redirectTo: '/parent1',pathMatch:'full' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
