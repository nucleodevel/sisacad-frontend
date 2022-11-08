import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaAula!: Aula[];
	listaDiscente!: Discente[];

	/*
	 * Constructors
	 */

	constructor(protected service: ParticipacaoAulaService, protected route: ActivatedRoute,
		protected aulaService: AulaService,
		protected discenteService: DiscenteService) {

		super(service, route, 'participacao-aula');
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

	ngOnInitSuperAdditional(dto: ParticipacaoAulaDto) {

		this.aulaService.findAll().subscribe(data => {
			this.listaAula = this.aulaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

		this.discenteService.findAll().subscribe(data => {
			this.listaDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	/*
	 * Compare methods
	 */

	compareAula(o1: Aula, o2: Aula) {
		return o1.compare(o2);
	}

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

}