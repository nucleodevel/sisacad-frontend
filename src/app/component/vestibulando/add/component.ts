import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

@Component({
	selector: 'app-vestibulando-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoAddComponent extends AbstractAddComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	listaOfertaCurso!: OfertaCurso[];

	constructor(protected service: VestibulandoService,
		protected route: ActivatedRoute, protected ofertaCursoService: OfertaCursoService) {
		super(service, route, 'vestibulando');
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