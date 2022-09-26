import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication/service';

@Component({
	selector: 'app-nav',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class NavComponent implements OnInit {

	constructor(public authenticationService: AuthenticationService) { 
		
	}

	ngOnInit() {

	}

}