import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginData: any = {}

  constructor(private router: Router,
    public authSvc: AuthService) {}

  ngOnInit(): void {
  }
    
  login() {
    this.authSvc.login(this.loginData).subscribe(() => {
        this.router.navigateByUrl('/companies');
      });
  }

  logout() {
    this.authSvc.logout();
    this.router.navigateByUrl('/')
  }
}
