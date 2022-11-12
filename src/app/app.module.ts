import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { UpdateTripComponent } from './components/update-trip/update-trip.component';
import { StationsListComponent } from './components/stations-list/stations-list.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/signin/signin.component';
import { UpdateStationComponent } from './components/update-station/update-station.component';
import { AddStationComponent } from './components/add-station/add-station.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTripComponent,
    TripsListComponent,
    UpdateTripComponent,
    StationsListComponent,
    SplashPageComponent,
    RegisterComponent,
    SignInComponent,
    UpdateStationComponent,
    AddStationComponent
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
