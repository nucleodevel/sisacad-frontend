import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularDto } from '../../../dto/estrutura-curricular/dto';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

import { Curso } from '../../../domain/curso/entity';
import { CursoService } from '../../../service/curso/service';

@Component({
	selector: 'app-estrutura-curricular-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class EstruturaCurricularAddComponent 
	extends AbstractAddComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaCurso!: Curso[];

	/*
	 * Constructors
	 */

	constructor(protected service: EstruturaCurricularService, protected route: ActivatedRoute,
		protected cursoService: CursoService) {

		super(service, route, 'estrutura-curricular');
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

	ngOnInitSuperAdditional() {

		this.cursoService.findAll().subscribe(data => {
			this.listaCurso = this.cursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	/*
	 * Compare methods
	 */

	compareCurso(o1: Curso, o2: Curso) {
		return o1.compare(o2);
	}

}