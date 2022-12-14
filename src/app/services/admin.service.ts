import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';
import { environment } from 'src/environments/environment';


// const baseUrl = 'http://localhost:8080/api/admins';
// const apiUrl = 'http://localhost:8080/api';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${apiUrl}/admins`);
  }

  getAdmin(id: any): Observable<Admin> {
    return this.http.get<Admin>(`${apiUrl}/admins/${id}`);
  }

  signIn(data: any): Observable<any> {
    return this.http.get(`${apiUrl}/admins/signIn`, data);
  }

  register(admin: Admin): Observable<any> {
    return this.http.post(`${apiUrl}/admins`, admin);
  }

  

}
