import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Avaliacao } from '../../../domain/avaliacao/entity';
import { AvaliacaoDto } from '../../../dto/avaliacao/dto';
import { AvaliacaoService } from '../../../service/avaliacao/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

@Component({
	selector: 'app-avaliacao-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoAddComponent extends AbstractAddComponent<Avaliacao, AvaliacaoDto, AvaliacaoService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: AvaliacaoService, protected route: ActivatedRoute,
		protected ofertaDisciplinaService: OfertaDisciplinaService) {

		super(service, route, 'avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional() {

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listaOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}