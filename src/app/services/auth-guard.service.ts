import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    // Si pas connecté
    if (this.userService.isConnected()) {
      return of(true);
    }
    this.router.navigate(['/auth', 'signin']);
    return of(false);
  }
}
