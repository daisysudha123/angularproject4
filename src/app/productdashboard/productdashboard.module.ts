import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdashboardRoutingModule } from './productdashboard-routing.module';
import { ProductdashboardComponent } from './productdashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductdashboardComponent
  ],
  imports: [
    CommonModule,
    ProductdashboardRoutingModule,
    FormsModule
  ]
})
export class ProductdashboardModule { }
