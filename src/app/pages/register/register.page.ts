import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterResponse } from "src/app/models/auth.model";
import { Register } from "src/app/models/register.model";
import { ApiService } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: 'register.page.html',
    styleUrls: ['./register.page.css']
})

export class RegisterComponent {
    registerData = new Register();
    constructor(
      private router: Router,
      private apiSvc: ApiService,
      private authSvc: AuthService
    ) {}
    
    register() {
      console.log(this.registerData);
      this.apiSvc
        .post('api/Account/register', this.registerData)
        .subscribe((response: RegisterResponse) => {
          this.authSvc.getToken();
          //this.router.navigateByUrl('/confirm');
        });
      //this.router.navigateByUrl('/confirm');
    }
}