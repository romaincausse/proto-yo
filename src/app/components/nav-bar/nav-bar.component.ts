import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userIsConnected: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userIsConnectedSubject.subscribe((isConnected) => {
      this.userIsConnected = isConnected;
    });
  }

  deconnecte(): void {
    this.userService.deconnect();
    this.router.navigate(['auth', 'signin']);
  }

}
