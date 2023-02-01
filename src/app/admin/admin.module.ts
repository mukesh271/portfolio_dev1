import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CommonComponent } from './UI/common/common.component';
import { PortfolioComponent } from './UI/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AdminComponent,
    CommonComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
