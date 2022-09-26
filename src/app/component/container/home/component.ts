import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'container-home',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class HomeComponent implements OnInit {
	title!: string;
	constructor() { }

	ngOnInit() { }

	updateTitle(value: string) {
		console.log(`updateTitle: ${value}`);
		this.title = value;
	}
}