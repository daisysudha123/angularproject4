import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { UserdashboardComponent } from './userdashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserdashboardComponent
  ],
  imports: [
    CommonModule,
    UserdashboardRoutingModule,
    FormsModule
  ]
})
export class UserdashboardModule { }
