import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaDto } from '../../../dto/oferta-disciplina/dto';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

@Component({
	selector: 'app-oferta-disciplina-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaListComponent extends AbstractListComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: OfertaDisciplinaService,
		) {
		super(service, 'oferta-disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}