import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  trip: Trip = new Trip();
  submitted = false;

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit(): void {
  }

  newTrip(): void {
    this.submitted = false;
    this.trip = new Trip();
  }

  saveTrip(): void {

    this.tripService.create(this.trip)
    .subscribe(data => {
      console.log(data)
      this.trip = new Trip();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveTrip();    
  }

  gotoList() {
    this.router.navigate(['/trips']);
  }

}