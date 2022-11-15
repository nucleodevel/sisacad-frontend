import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaDto } from '../../../dto/oferta-disciplina/dto';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaService } from '../../../service/disciplina/service';

import { Docente } from '../../../domain/docente/entity';
import { DocenteService } from '../../../service/docente/service';

import { Turma } from '../../../domain/turma/entity';

@Component({
	selector: 'app-oferta-disciplina-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaEditComponent extends AbstractEditComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaDisciplina!: Disciplina[];
	listaDocente!: Docente[];

	/*
	 * Constructors
	 */

	constructor(protected service: OfertaDisciplinaService, protected route: ActivatedRoute,
		protected disciplinaService: DisciplinaService,
		protected docenteService: DocenteService) {

		super(service, route, 'oferta-disciplina');
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

	ngOnInitSuperAdditional(dto: OfertaDisciplinaDto) {

		this.disciplinaService.findAll().subscribe(data => {
			this.listaDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

		this.docenteService.findAll().subscribe(data => {
			this.listaDocente = this.docenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	/*
	 * Compare methods
	 */

	compareDisciplina(o1: Disciplina, o2: Disciplina) {
		return o1.compare(o2);
	}

	compareDocente(o1: Docente, o2: Docente) {
		return o1.compare(o2);
	}

}