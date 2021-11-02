import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
  })

export class AuthorizeGuard implements CanActivate {
  constructor(private authSvc: AuthService) { }
  
  canActivate(): Observable<boolean> {
    return this.authSvc.currentUser$.pipe(
      map(user => {
        if (user) 
        return true;
        return false;
      })
    )
  }
}