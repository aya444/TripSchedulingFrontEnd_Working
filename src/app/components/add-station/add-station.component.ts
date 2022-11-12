import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from 'src/app/models/station.model';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  station: Station = new Station();
  submitted = false;

  constructor(private stationService: StationService, private router: Router) { }

  ngOnInit(): void {
  }

  newTrip(): void {
    this.submitted = false;
    this.station = new Station();
  }


  public onAddStation(): void {
    this.stationService.addStation(this.station)
    .subscribe(
      (response: Station) => {
        console.log(response);
        this.station = new Station();
        this.stationService.getStations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.onAddStation();    
  }

  gotoList() {
    this.router.navigate(['/station']);
  }

}
