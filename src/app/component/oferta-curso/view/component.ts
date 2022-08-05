import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoDto } from '../../../dto/oferta-curso/dto';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

@Component({
	selector: 'app-oferta-curso-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaCursoViewComponent extends AbstractViewComponent<OfertaCurso, OfertaCursoDto, OfertaCursoService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: OfertaCursoService,
		protected route: ActivatedRoute) {
		super(service, route, 'oferta-curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}