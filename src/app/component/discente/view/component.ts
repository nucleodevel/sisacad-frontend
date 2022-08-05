import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

@Component({
	selector: 'app-discente-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteViewComponent extends AbstractViewComponent<Discente, DiscenteDto, DiscenteService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: DiscenteService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected route: ActivatedRoute) {
		super(service, route, 'discente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional(dto: DiscenteDto) {

		this.service.findAllOfertaDisciplinaById(dto.id).subscribe(data => {
			console.log(data);
			this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
		
	}

}