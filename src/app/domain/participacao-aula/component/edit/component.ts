import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { ParticipacaoAula } from '../../entity/entity';
import { ParticipacaoAulaDto } from '../../dto/dto';
import { ParticipacaoAulaService } from '../../service/service';

import { Aula } from '../../../aula/entity/entity';
import { AulaService } from '../../../aula/service/service';

import { Discente } from '../../../discente/entity/entity';
import { DiscenteService } from '../../../discente/service/service';

@Component({
	selector: 'app-participacao-aula-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAulaEditComponent extends AbstractEditComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> implements OnInit {

	listaAula!: Aula[];
	listaDiscente!: Discente[];

	constructor(protected service: ParticipacaoAulaService, protected router: Router,
		protected route: ActivatedRoute, protected aulaService: AulaService, protected discenteService: DiscenteService) {
		super(service, router, route, 'participacao-aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.aulaService.findAll().subscribe(data => {
			this.listaAula = this.aulaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.discenteService.findAll().subscribe(data => {
			this.listaDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

	compareAula(o1: Aula, o2: Aula) {
		return o1.compare(o2);
	}

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

}