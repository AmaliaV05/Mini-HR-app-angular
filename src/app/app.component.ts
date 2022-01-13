import { Component } from '@angular/core';
import { LoginResponse } from './models/auth.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-HR-app-angular';

  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: LoginResponse = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.authSvc.setCurrentUser(user);
    }
  }
}
