import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']

})
export class TripsListComponent implements OnInit {

  trips?:Observable< Trip[]>;

  constructor(private tripService: TripService,  private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.trips = this.tripService.getAll();
  }

  deleteTrip(id: number): void {
    this.tripService.delete(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  // tripDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }

  updateTrip(id: number){
    this.router.navigate(['update', id]);
  }

  removeAllTrips(): void {
    this.tripService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.reloadData();
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }
  gotoList() {
    this.router.navigate(['/add']);
  }

}