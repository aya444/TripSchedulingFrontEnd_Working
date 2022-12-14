import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from 'src/app/models/station.model'
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class StationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient){}

  public getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.apiUrl}/station/all`);
  }

  public getStation(StationId: any): Observable<Station> {
    return this.http.get<Station>(`${this.apiUrl}/station/find/${StationId}`);
  }

  public addStation(Station: Station): Observable<Station> {
    return this.http.post<Station>(`${this.apiUrl}/station/add`, Station);
  }

  public updateStation(StationId: any, Station: Station): Observable<Station> {
    return this.http.put<Station>(`${this.apiUrl}/station/update/${StationId}`, Station);
  }

  public deleteStation(StationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/station/delete/${StationId}`);
  }
}