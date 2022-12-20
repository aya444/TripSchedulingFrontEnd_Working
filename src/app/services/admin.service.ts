import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(environment.apiUrl + '/api/admins');
  }

  getAdmin(id: any): Observable<Admin> {
    return this.http.get<Admin>(environment.apiUrl + '/api/admins/${id}');
  }

  signIn(data: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/admins/signIn', data);
  }

  register(admin: Admin): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/admins', admin);
  }

  

}
