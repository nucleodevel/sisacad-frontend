import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaDto } from '../../../dto/disciplina/dto';
import { DisciplinaService } from '../../../service/disciplina/service';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

@Component({
	selector: 'app-disciplina-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DisciplinaEditComponent extends AbstractEditComponent<Disciplina, DisciplinaDto, DisciplinaService> {

	listEstruturaCurricular!: EstruturaCurricular[];
	listOldSelectedEstruturaCurricular!: EstruturaCurricular[];
	listSelectedEstruturaCurricular!: EstruturaCurricular[];

	constructor(protected service: DisciplinaService, protected estruturaCurricularService: EstruturaCurricularService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'disciplina');
		this.estruturaCurricularService = estruturaCurricularService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.estruturaCurricularService.findAll().subscribe(data => {
			this.listEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllEstruturaCurricularById(this.id).subscribe(data => {
			console.log(data);
			this.listOldSelectedEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
			this.listSelectedEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	onSubmit() {
		var listDeleteEstruturaCurricular: EstruturaCurricular[] = [];
		var listInsertEstruturaCurricular: EstruturaCurricular[] = [];
		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);

		this.listOldSelectedEstruturaCurricular.forEach(oldItem => {
			var exists = false;
			this.listSelectedEstruturaCurricular.forEach(item => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listDeleteEstruturaCurricular.push(oldItem);
			}
		});

		this.listSelectedEstruturaCurricular.forEach(item => {
			var exists = false;
			this.listOldSelectedEstruturaCurricular.forEach(oldItem => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listInsertEstruturaCurricular.push(item);
			}
		});

		listDeleteEstruturaCurricular.forEach(item => {
			this.service.deleteEstruturaCurricular(this.id, item.id).subscribe();
		});

		listInsertEstruturaCurricular.forEach(item => {
			this.service.insertEstruturaCurricular(this.id, item.id).subscribe();
		});

		this.service.update(this.id, dto).subscribe(data => {
			this.list();
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareEstruturaCurricular(o1: EstruturaCurricular, o2: EstruturaCurricular) {
		return o1.compare(o2);
	}

}