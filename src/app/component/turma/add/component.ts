import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Turma } from '../../../domain/turma/entity';
import { TurmaDto } from '../../../dto/turma/dto';
import { TurmaService } from '../../../service/turma/service';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

@Component({
	selector: 'app-turma-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaAddComponent extends AbstractAddComponent<Turma, TurmaDto, TurmaService> {

	listaOfertaCurso!: OfertaCurso[];

	constructor(protected service: TurmaService,
		protected route: ActivatedRoute, protected ofertaCursoService: OfertaCursoService) {
		super(service, route, 'turma');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.ofertaCursoService.findAll().subscribe(data => {
			this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

}