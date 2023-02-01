import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPreviewComponent } from './event-preview/event-preview.component';

const routes: Routes = [
  {
  path:'',
  loadChildren: () => import('../app/admin/admin.module').then(m =>m.AdminModule)
  },

  {path:'eventsReview', component:EventPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
