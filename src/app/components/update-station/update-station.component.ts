import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from 'src/app/models/station.model';
import { Trip } from 'src/app/models/trip.model';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {

  id?:number;
  station: Station=
  {
      name: '',
      imageUrl: '',
  };
  submitted = false;

  constructor( private route: ActivatedRoute, private router: Router, private stationService: StationService) { }

  ngOnInit(): void {
    this.station = new Trip();
    this.id = this.route.snapshot.params['id'];
    this.stationService.getStation(this.id)
    .subscribe(data => {
      console.log(data)
      this.station = data;
    }, error => console.log(error));
  }


  public onUpdateStation() :void {
    this.stationService.updateStation(this.id, this.station)
    .subscribe(data => {
      console.log(data);
      this.station = new Station();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.onUpdateStation();
  }

  gotoList() {
    this.router.navigate(['/station']);
  }
}
