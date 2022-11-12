import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${baseUrl}`);
  }

  getAdmin(id: any): Observable<Admin> {
    return this.http.get<Admin>(`${baseUrl}/${id}`);
  }

  register(admin: Admin): Observable<any> {
    return this.http.post(`${baseUrl}`, admin);
  }

  signIn(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/signIn`, data);
  }

}
