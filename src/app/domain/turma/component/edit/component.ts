import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Turma } from '../../entity/entity';
import { TurmaDto } from '../../dto/dto';
import { TurmaService } from '../../service/service';

import { OfertaCurso } from '../../../oferta-curso/entity/entity';
import { OfertaCursoService } from '../../../oferta-curso/service/service';

import { OfertaDisciplina } from '../../../oferta-disciplina/entity/entity';
import { OfertaDisciplinaService } from '../../../oferta-disciplina/service/service';

@Component({
	selector: 'app-turma-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaEditComponent extends AbstractEditComponent<Turma, TurmaDto, TurmaService> implements OnInit {

	listaOfertaCurso!: OfertaCurso[];
	listOfertaDisciplina!: OfertaDisciplina[];
	listOldSelectedOfertaDisciplina!: OfertaDisciplina[];
	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: TurmaService, protected ofertaDisciplinaService: OfertaDisciplinaService, 
		protected router: Router, protected route: ActivatedRoute, protected ofertaCursoService: OfertaCursoService) {
		super(service, router, route, 'turma');
		this.ofertaDisciplinaService = ofertaDisciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.ofertaCursoService.findAll().subscribe(data => {
			this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
		});

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		});

		this.service.findAllOfertaDisciplinaById(this.id).subscribe(data => {
			console.log(data)
			this.listOldSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
			this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => console.log(error));
	}

	onSubmit() {
		var listDeleteOfertaDisciplina: OfertaDisciplina[] = [];
		var listInsertOfertaDisciplina: OfertaDisciplina[] = [];
		var dto = this.service.newDtoInstance();
		
		dto.copyFromEntity(this.entity);
		this.service.update(this.id, dto).subscribe();

		this.listOldSelectedOfertaDisciplina.forEach(oldItem => {
			var exists = false;
			this.listSelectedOfertaDisciplina.forEach(item => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});
			
			if (!exists) {
				listDeleteOfertaDisciplina.push(oldItem);
			}
		});

		this.listSelectedOfertaDisciplina.forEach(item => {
			var exists = false;
			this.listOldSelectedOfertaDisciplina.forEach(oldItem => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});
			
			if (!exists) {
				listInsertOfertaDisciplina.push(item);
			}
		});

		listDeleteOfertaDisciplina.forEach(item => {
			this.service.deleteOfertaDisciplina(this.id, item.id).subscribe();
		});

		listInsertOfertaDisciplina.forEach(item => {
			this.service.insertOfertaDisciplina(this.id, item.id).subscribe();
		});

		this.list();
	}

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}