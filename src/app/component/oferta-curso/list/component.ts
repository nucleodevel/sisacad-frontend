import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoDto } from '../../../dto/oferta-curso/dto';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

@Component({
	selector: 'app-oferta-curso-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaCursoListComponent extends AbstractListComponent<OfertaCurso, OfertaCursoDto, OfertaCursoService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: OfertaCursoService,
		) {
		super(service, 'oferta-curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}