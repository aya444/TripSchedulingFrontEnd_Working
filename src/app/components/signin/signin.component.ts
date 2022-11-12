import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  Admin: Admin = new Admin();
  submitted = false;

  admins?:Observable< Admin[]>;

  constructor(private AdminService: AdminService, private router: Router) { }
  ngOnInit(): void {
    this.admins = this.AdminService.getAll();
  }

  signIN(): void {

    this.AdminService.signIn(this.Admin)
    .subscribe(data => {
      console.log(data)
      this.Admin = new Admin();
      this.gotoSplashPage();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.signIN();


  }

  gotoSplashPage() {
    this.router.navigate(['/splash']);
  }



}
