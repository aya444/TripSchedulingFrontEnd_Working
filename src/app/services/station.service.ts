import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Station } from 'src/app/models/station.model'

@Injectable({providedIn: 'root'})
export class StationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.apiServerUrl}/station/all`);
  }

  public addStation(Station: Station): Observable<Station> {
    return this.http.post<Station>(`${this.apiServerUrl}/station/add`, Station);
  }

  public updateStation(Station: Station): Observable<Station> {
    return this.http.put<Station>(`${this.apiServerUrl}/station/update`, Station);
  }

  public deleteStation(StationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/station/delete/${StationId}`);
  }
}