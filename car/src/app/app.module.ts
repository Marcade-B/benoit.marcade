import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCarComponent } from './new-car/new-car.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { CarFormComponent } from './new-car/car-form/car-form.component';
import { CarListComponent } from './new-car/car-list/car-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewCarComponent,
    ViewCarComponent,
    CarFormComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
