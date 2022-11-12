import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  Admin: Admin = new Admin();
  submitted = false;

  constructor(private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  newAdmin(): void {
    this.submitted = false;
    this.Admin = new Admin();
  }

  saveAdmin(): void {

    this.AdminService.register(this.Admin)
    .subscribe(data => {
      console.log(data)
      this.Admin = new Admin();
      this.gotoSignIn();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveAdmin


  }

  gotoSignIn() {
    this.router.navigate(['/signIn']);
  }
}
