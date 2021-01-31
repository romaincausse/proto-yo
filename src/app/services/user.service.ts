import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  userIsConnectedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.user = null;
    this.userIsConnectedSubject = new BehaviorSubject<boolean>(false);
  }

  isConnected(): boolean {
    if (this.user) {
      return true;
    }
    return false;
  }

  connect(data: User): Observable<boolean> {
    if (data.name === 'Administrateur' && data.password === 'azerty') {
      this.user = data;
      this.userIsConnectedSubject.next(true);
      return of(true);
    }
    this.userIsConnectedSubject.next(false);
    return of(false);
  }

  deconnect(): void {
    this.user = null;
    this.userIsConnectedSubject.next(false);
  }
}
