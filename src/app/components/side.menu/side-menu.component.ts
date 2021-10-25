import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-side-menu',
    templateUrl: 'side-menu.component.html',
    styleUrls: ['side-menu.component.css']
})

export class SideMenuComponent {
    constructor(private authSvc: AuthService,
        private router: Router) { }
    
    logOut() {
        this.authSvc.removeToken();
        this.router.navigateByUrl('/login');
    }
}