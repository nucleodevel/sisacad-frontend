import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { ParticipacaoAvaliacao } from '../../../domain/participacao-avaliacao/entity';
import { ParticipacaoAvaliacaoDto } from '../../../dto/participacao-avaliacao/dto';
import { ParticipacaoAvaliacaoService } from '../../../service/participacao-avaliacao/service';

import { Avaliacao } from '../../../domain/avaliacao/entity';
import { AvaliacaoService } from '../../../service/avaliacao/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteService } from '../../../service/discente/service';

@Component({
	selector: 'app-participacao-avaliacao-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAvaliacaoEditComponent extends AbstractEditComponent<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto, ParticipacaoAvaliacaoService> {

	listaAvaliacao!: Avaliacao[];
	listaDiscente!: Discente[];

	constructor(protected service: ParticipacaoAvaliacaoService,
		protected route: ActivatedRoute, protected avaliacaoService: AvaliacaoService, protected discenteService: DiscenteService) {
		super(service, route, 'participacao-avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.avaliacaoService.findAll().subscribe(data => {
			this.listaAvaliacao = this.avaliacaoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.discenteService.findAll().subscribe(data => {
			this.listaDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareAvaliacao(o1: Avaliacao, o2: Avaliacao) {
		return o1.compare(o2);
	}

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

}