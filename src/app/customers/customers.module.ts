import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {MaterialComponentsModule} from '../shared/material-components.module';


@NgModule({
  declarations: [CustomersComponent, CreateCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialComponentsModule
  ],
  exports:[CustomersRoutingModule]
})
export class CustomersModule { }
