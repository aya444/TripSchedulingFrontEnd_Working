import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';

// const baseUrl = 'http://localhost:8080/api/trips';
// const apiUrl = 'http://localhost:8080/api';
// const apiUrl = environment.apiUrl;

//const apiUrl = 'http://springstar-trip-scheduling.apps.eu410.prod.nextcle.com/api';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(environment.apiUrl + '/api/trips');
  }

  get(id: any): Observable<Trip> {
    return this.http.get<Trip>(environment.apiUrl + '/api/trips/${id}');
  }

  create(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/trips', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(environment.apiUrl + '/api/trips/${id}', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(environment.apiUrl + '/api/trips/${id}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(environment.apiUrl + '/api/trips');
  }

}
