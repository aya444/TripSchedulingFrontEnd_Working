import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  trip: Trip = {
    from_station: '',
    to_station: '',
    departure_time: '',
    arrival_time: ''
  };
  submitted = false;

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
  }

  saveTrip(): void {
    const data = {
      from_station: this.trip.from_station,
      to_station: this.trip.to_station,
      departure_time:this.trip.departure_time,
      arrival_time: this.trip.arrival_time
    };

    this.tripService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTrip(): void {
    this.submitted = false;
    this.trip = {
      from_station: '',
      to_station: '',
      departure_time: '',
      arrival_time: ''
    };
  }

}