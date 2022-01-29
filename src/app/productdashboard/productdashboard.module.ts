import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdashboardRoutingModule } from './productdashboard-routing.module';
import { ProductdashboardComponent } from './productdashboard.component';


@NgModule({
  declarations: [
    ProductdashboardComponent
  ],
  imports: [
    CommonModule,
    ProductdashboardRoutingModule
  ]
})
export class ProductdashboardModule { }
