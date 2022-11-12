import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { UpdateTripComponent } from './components/update-trip/update-trip.component';
import { StationsListComponent } from './components/stations-list/stations-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AddStationComponent } from './components/add-station/add-station.component';
import { UpdateStationComponent } from './components/update-station/update-station.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { SignInComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'trips', component: TripsListComponent },
  { path: 'add', component: AddTripComponent },
  { path: 'update/:id', component: UpdateTripComponent },
  { path: 'station', component: StationsListComponent},
  { path: 'addStation', component: AddStationComponent },
  { path: 'updateStation/:id', component: UpdateStationComponent},
  { path: 'splash', component: SplashPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
