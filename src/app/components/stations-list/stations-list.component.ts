import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {

  public Stations: Station[] = [];
  public editStation!: Station;
  public deleteStation!: Station;

  constructor(private StationService: StationService){}

  ngOnInit() {
    this.getStations();
  }

  public getStations(): void {
    this.StationService.getStations().subscribe(
      (response: Station[]) => {
        this.Stations = response;
        console.log(this.Stations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddStation(addForm: any): void {
    document.getElementById('add-Station-form')?.click();
    this.StationService.addStation(addForm.value).subscribe(
      (response: Station) => {
        console.log(response);
        this.getStations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateStation(Station: any): void {
    this.StationService.updateStation(Station).subscribe(
      (response: Station) => {
        console.log(response);
        this.getStations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStation(StationId: any): void {
    this.StationService.deleteStation(StationId).subscribe(
      (response: void) => {
        console.log(response);
        this.getStations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  // || Station.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
  // || Station.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
  // || Station.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1)



  // zamalek  za
  public searchStations(key: any): void {
    console.log(key);
    const results: Station[] = [];
    for (const Station of this.Stations) {
      if (Station.name.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       {
        results.push(Station);
       }
    }
    this.Stations = results;
    if (results.length === 0 || !key) {
      this.getStations();
    }
  }

  public onOpenModal(station:any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStationModal');
    }
    if (mode === 'edit') {
      this.editStation = station;
      button.setAttribute('data-target', '#updateStationModal');
    }
    if (mode === 'delete') {
      this.deleteStation = station;
      button.setAttribute('data-target', '#deleteStationModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
