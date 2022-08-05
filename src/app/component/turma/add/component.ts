import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

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

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

}