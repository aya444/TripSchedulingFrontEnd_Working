import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';
import { environment } from 'src/environments/environment';

// const baseUrl = 'http://localhost:8080/api/trips';
// const apiUrl = 'http://localhost:8080/api';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${apiUrl}/trips`);
  }

  get(id: any): Observable<Trip> {
    return this.http.get<Trip>(`${apiUrl}/trips/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/trips`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/trips/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/trips/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${apiUrl}/trips`);
  }

}
