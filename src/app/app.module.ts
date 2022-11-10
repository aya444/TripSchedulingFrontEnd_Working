import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTripComponent,
    TripDetailsComponent,
    TripsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
