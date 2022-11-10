import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';

const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  { path: 'trips', component: TripsListComponent },
  { path: 'trips/:id', component: TripDetailsComponent },
  { path: 'add', component: AddTripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
