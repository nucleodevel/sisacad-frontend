import { Component, ViewChild, ElementRef } from '@angular/core';

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

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: AulaService) {
		super(service, 'aula');
	}

	/*
	 * Component methods
	 */

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional() {

	}

}