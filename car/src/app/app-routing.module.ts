import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCarComponent } from './view-car/view-car.component';
import { NewCarComponent } from './new-car/new-car.component';

const routes: Routes = [
  { path: 'new-car', component: NewCarComponent },
  { path: 'view-car', component: ViewCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
