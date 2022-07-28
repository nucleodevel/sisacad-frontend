import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Turma } from '../../entity/entity';
import { TurmaDto } from '../../dto/dto';
import { TurmaService } from '../../service/service';

import { OfertaCurso } from '../../../oferta-curso/entity/entity';
import { OfertaCursoService } from '../../../oferta-curso/service/service';

@Component({
	selector: 'app-turma-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaAddComponent extends AbstractAddComponent<Turma, TurmaDto, TurmaService> {

	listaOfertaCurso!: OfertaCurso[];

	constructor(protected service: TurmaService, protected router: Router,
		protected route: ActivatedRoute, protected ofertaCursoService: OfertaCursoService) {
		super(service, router, route, 'turma');
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