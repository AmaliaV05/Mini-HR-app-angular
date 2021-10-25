import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginResponse } from "src/app/models/auth.model";
import { LoginRequest } from "src/app/models/login.model";
import { ApiService } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.css'],
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent {
  loginData = new LoginRequest();

  constructor(private router: Router,
    private apiSvc: ApiService,
    private authSvc: AuthService,
    private activatedRoute: ActivatedRoute) {}

    
  logIn() {
    console.log(this.loginData);
    this.apiSvc
      .post('api/Authentication/login', this.loginData)
      .subscribe((response: LoginResponse) => {
        this.authSvc.saveToken(response.token);
        //this.router.navigateByUrl('/films');
      });
    //this.router.navigateByUrl('films');
  }
}