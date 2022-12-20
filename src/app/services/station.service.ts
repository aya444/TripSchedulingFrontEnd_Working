import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from 'src/app/models/station.model'

@Injectable({providedIn: 'root'})
export class StationService {

  constructor(private http: HttpClient){}

  public getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(environment.apiUrl + '/station/all');
  }

  public getStation(StationId: any): Observable<Station> {
    return this.http.get<Station>(environment.apiUrl + '/station/find/${StationId}');
  }

  public addStation(Station: Station): Observable<Station> {
    return this.http.post<Station>(environment.apiUrl + '/station/add', Station);
  }

  public updateStation(StationId: any, Station: Station): Observable<Station> {
    return this.http.put<Station>(environment.apiUrl + '/station/update/${StationId}', Station);
  }

  public deleteStation(StationId: number): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + '/station/delete/${StationId}');
  }
}