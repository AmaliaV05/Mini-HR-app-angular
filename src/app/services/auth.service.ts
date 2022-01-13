import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginResponse, RegisterResponse } from '../models/auth.model';

@Injectable()
export class AuthService {
    API_URL = 'https://localhost:5001/';
    private currentUserSource = new ReplaySubject<LoginResponse>(1);
    currentUser$ = this.currentUserSource.asObservable();
    confirmation: any = {}; 

    constructor(private http: HttpClient) { }

    login(model: any) {
        return this.http.post(this.API_URL + 'api/account/login', model).pipe(
          map((response: LoginResponse) => {
            const user = response;
            if (user) {
              this.setCurrentUser(user);
            }
          })
        )
    }

    register(model: any) {
        return this.http.post(this.API_URL + 'api/account/register', model).pipe(
          map((user: RegisterResponse) => {
            if (user) {
                localStorage.setItem('confirmationToken', JSON.stringify(user.confirmationToken));
            }
          })
        )
    }

    confirm(model: any) {
        this.confirmation.email = model.email;
        this.confirmation.phoneNumber = model.phoneNumber;
        this.confirmation.confirmationToken = JSON.parse(localStorage.getItem('confirmationToken'));
        
        return this.http.post(this.API_URL + 'api/account/confirm', this.confirmation).pipe(
            map(() => { 
                localStorage.removeItem("confirmationToken");
            })
        )
    }

    setCurrentUser(user: any) {
        user.roles = [];
        const roles = this.getDecodedToken(user.token).role;
        Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }

    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
      }

    getDecodedToken(token) {
        return JSON.parse(atob(token.split('.')[1]));
    }
}
