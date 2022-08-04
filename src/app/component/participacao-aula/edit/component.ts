import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { ParticipacaoAula } from '../../../domain/participacao-aula/entity';
import { ParticipacaoAulaDto } from '../../../dto/participacao-aula/dto';
import { ParticipacaoAulaService } from '../../../service/participacao-aula/service';

import { Aula } from '../../../domain/aula/entity';
import { AulaService } from '../../../service/aula/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteService } from '../../../service/discente/service';

@Component({
	selector: 'app-participacao-aula-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAulaEditComponent extends AbstractEditComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> {

	listaAula!: Aula[];
	listaDiscente!: Discente[];

	constructor(protected service: ParticipacaoAulaService,
		protected route: ActivatedRoute, protected aulaService: AulaService, protected discenteService: DiscenteService) {
		super(service, route, 'participacao-aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.aulaService.findAll().subscribe(data => {
			this.listaAula = this.aulaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.discenteService.findAll().subscribe(data => {
			this.listaDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareAula(o1: Aula, o2: Aula) {
		return o1.compare(o2);
	}

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

}