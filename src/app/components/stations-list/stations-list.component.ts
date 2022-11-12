import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Station } from 'src/app/models/station.model';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {

  stations?:Observable< Station[]>;

  constructor(private StationService: StationService, private router: Router){}

  ngOnInit() {
    this.getStations();
  }

  public getStations(): void {
    this.stations = this.StationService.getStations();
  }

  public onDeleteStation(StationId: any): void {
    this.StationService.deleteStation(StationId)
    .subscribe(
      (response: void) => {
        console.log(response);
        this.getStations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  gotoAddStation() {
    this.router.navigate(['/addStation']);
  }

  goToUpdateStation(id: number){
    this.router.navigate(['updateStation', id]);
  }

  gotoSplash1() {
    this.router.navigate(['/splash']);
  }
}

