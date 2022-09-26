import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}