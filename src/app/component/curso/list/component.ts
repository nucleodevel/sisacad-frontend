import { Component, ViewChild, ElementRef } from '@angular/core';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Curso } from '../../../domain/curso/entity';
import { CursoDto } from '../../../dto/curso/dto';
import { CursoService } from '../../../service/curso/service';

@Component({
	selector: 'app-curso-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoListComponent extends AbstractListComponent<Curso, CursoDto, CursoService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: CursoService) {
		super(service, 'curso');
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