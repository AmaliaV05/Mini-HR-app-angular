import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.css']
})

export class LogoutComponent {

  constructor(
    private authSvc: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
}
