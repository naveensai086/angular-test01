import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1Component } from './home/parent1/parent1.component';
import { Parent2Component } from './home/parent2/parent2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialComponentsModule } from './shared/material-components.module';
@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    PageNotFoundComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialComponentsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
