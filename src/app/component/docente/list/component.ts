import { Component, ViewChild, ElementRef } from '@angular/core';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Docente } from '../../../domain/docente/entity';
import { DocenteDto } from '../../../dto/docente/dto';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-docente-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteListComponent extends AbstractListComponent<Docente, DocenteDto, DocenteService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: DocenteService) {
		super(service, 'docente');
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