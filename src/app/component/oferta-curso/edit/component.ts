import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoDto } from '../../../dto/oferta-curso/dto';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

import { Vestibular } from '../../../domain/vestibular/entity';
import { VestibularService } from '../../../service/vestibular/service';

@Component({
	selector: 'app-oferta-curso-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaCursoEditComponent extends AbstractEditComponent<OfertaCurso, OfertaCursoDto, OfertaCursoService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaVestibular!: Vestibular[];
	listaEstruturaCurricular!: EstruturaCurricular[];

	/*
	 * Constructors
	 */

	constructor(protected service: OfertaCursoService, protected route: ActivatedRoute,
		protected estruturaCurricularService: EstruturaCurricularService,
		protected vestibularService: VestibularService) {

		super(service, route, 'oferta-curso');
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

	ngOnInitSuperAdditional(dto: OfertaCursoDto) {

		this.vestibularService.findAll().subscribe(data => {
			this.listaVestibular = this.vestibularService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

		this.estruturaCurricularService.findAll().subscribe(data => {
			this.listaEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	/*
	 * Compare methods
	 */

	compareEstruturaCurricular(o1: EstruturaCurricular, o2: EstruturaCurricular) {
		return o1.compare(o2);
	}

	compareVestibular(o1: Vestibular, o2: Vestibular) {
		return o1.compare(o2);
	}

}