import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-discente-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteEditComponent extends AbstractEditComponent<Discente, DiscenteDto, DiscenteService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaVestibulando!: Vestibulando[];
	listOfertaDisciplina!: OfertaDisciplina[];
	listOldSelectedOfertaDisciplina!: OfertaDisciplina[];
	listNotSelectedOfertaDisciplina!: OfertaDisciplina[];
	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: DiscenteService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected route: ActivatedRoute, protected vestibulandoService: VestibulandoService) {
		super(service, route, 'discente');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.listOfertaDisciplina = [];
		this.listOldSelectedOfertaDisciplina = [];
		this.listNotSelectedOfertaDisciplina = [];
		this.listSelectedOfertaDisciplina = [];

		this.vestibulandoService.findAll().subscribe(data => {
			this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllOfertaDisciplinaById(this.id).subscribe(data => {
			console.log(data);
			this.listOldSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
			this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);

			this.listOfertaDisciplina.forEach(item => {
				var exists = false;
				this.listSelectedOfertaDisciplina.forEach(slctItem => {
					if (item.id == slctItem.id) {
						exists = true;
					}
				});

				if (!exists) {
					this.listNotSelectedOfertaDisciplina.push(item);
				}
			});
		}, error => {
			this.setErrorMessage(error);
		});
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

	onSubmit() {
		var listDeleteOfertaDisciplina: OfertaDisciplina[] = [];
		var listInsertOfertaDisciplina: OfertaDisciplina[] = [];
		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);

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

		this.service.update(this.id, dto).subscribe(data => {
			this.list();
		}, error => {
			this.setErrorMessage(error);
		});
	}

	setOfertaDisciplinaAsSelected(index: number) {
		var item = this.listNotSelectedOfertaDisciplina[index];
		this.listSelectedOfertaDisciplina.push(item);
		this.listNotSelectedOfertaDisciplina.splice(index, 1);
	}

	setOfertaDisciplinaAsNotSelected(index: number) {
		var item = this.listSelectedOfertaDisciplina[index];
		this.listNotSelectedOfertaDisciplina.push(item);
		this.listSelectedOfertaDisciplina.splice(index, 1);
	}

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}