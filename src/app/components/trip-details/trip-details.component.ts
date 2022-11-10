import { Component, Input, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTrip: Trip = {
    from_station: '',
    to_station: '',
    departure_time: '',
    arrival_time: ''
  };

  message = '';

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTrip(this.route.snapshot.params["id"]);
    }
  }

  getTrip(id: string): void {
    this.tripService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTrip = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTrip(): void {
    this.message = '';

    this.tripService.update(this.currentTrip.id, this.currentTrip)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This trip was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTrip(): void {
    this.tripService.delete(this.currentTrip.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/trips']);
        },
        error: (e) => console.error(e)
      });
  }

}
