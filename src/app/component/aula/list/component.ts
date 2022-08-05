import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

@Component({
	selector: 'app-aula-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaListComponent extends AbstractListComponent<Aula, AulaDto, AulaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: AulaService) {
		super(service, 'aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}