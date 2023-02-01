import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonComponent } from './UI/common/common.component';
import { PortfolioComponent } from './UI/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent
  },
  {
    path:'profile',
    component:PortfolioComponent
  },
  {
    path:'common',
    component:CommonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
