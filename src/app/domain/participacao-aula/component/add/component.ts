import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { ParticipacaoAula } from '../../entity/entity';
import { ParticipacaoAulaDto } from '../../dto/dto';
import { ParticipacaoAulaService } from '../../service/service';

import { Aula } from '../../../aula/entity/entity';
import { AulaService } from '../../../aula/service/service';

import { Discente } from '../../../discente/entity/entity';
import { DiscenteService } from '../../../discente/service/service';

@Component({
	selector: 'app-participacao-aula-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAulaAddComponent extends AbstractAddComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> {

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