import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
export class EstruturaCurricularAddComponent extends AbstractAddComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	listaCurso!: Curso[];

	constructor(protected service: EstruturaCurricularService, protected router: Router,
		protected route: ActivatedRoute, protected cursoService: CursoService) {
		super(service, router, route, 'estrutura-curricular');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.cursoService.findAll().subscribe(data => {
			this.listaCurso = this.cursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareCurso(o1: Curso, o2: Curso) {
		return o1.compare(o2);
	}

}