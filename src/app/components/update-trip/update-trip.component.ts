import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  id?:number;
  trip: Trip=
  {
      from_station: '',
      to_station: '',
      departure_time: '',
      arrival_time: ''
  };
  submitted = false;

  constructor( private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit(): void {
    this.trip = new Trip();
    this.id = this.route.snapshot.params['id'];
    this.tripService.get(this.id)
    .subscribe(data => {
      console.log(data)
      this.trip = data;
    }, error => console.log(error));
  }

  updateTrip() {
    this.tripService.update(this.id, this.trip)
    .subscribe(data => {
      console.log(data);
      this.trip = new Trip();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateTrip();    
  }

  gotoList() {
    this.router.navigate(['/trips']);
  }

}
