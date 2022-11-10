import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {

  trips?: Trip[];
  currentTrip: Trip = {};
  currentIndex = -1;

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.retrieveTrips();
  }

  retrieveTrips(): void {
    this.tripService.getAll()
      .subscribe({
        next: (data) => {
          this.trips = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTrips();
    this.currentTrip = {};
    this.currentIndex = -1;
  }

  setActiveTrip(trip: Trip, index: number): void {
    this.currentTrip = trip;
    this.currentIndex = index;
  }

  removeAllTrips(): void {
    this.tripService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}