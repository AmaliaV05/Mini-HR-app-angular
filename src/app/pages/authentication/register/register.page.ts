import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: 'register.page.html',
    styleUrls: ['./register.page.css']
})

export class RegisterComponent {
    registerData: any = {};
    confirmData: any = {};
    confirmMode = false;
    showMessage = false;
    
    constructor(private authSvc: AuthService) { }
    
    register() {
      this.authSvc.register(this.registerData).subscribe(() => {
        this.confirmMode = true;
      })
    }

    confirm() {
      this.authSvc.confirm(this.confirmData).subscribe(() => {
          this.showMessage = true;
      })
    }
}