import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-discente-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteAddComponent extends AbstractAddComponent<Discente, DiscenteDto, DiscenteService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaVestibulando!: Vestibulando[];

	vestibulandoCpf!: string;

	/*
	 * Constructors
	 */

	constructor(protected service: DiscenteService, protected route: ActivatedRoute,
		protected vestibulandoService: VestibulandoService) {

		super(service, route, 'discente');
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

		this.vestibulandoService.findAllAprovadoNotDiscente().subscribe(data => {
			this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.insert(dto).subscribe(result => {
			this.setResultMessage("SUCCESS", "Matriculado com sucesso");
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	/*
	 * Form events
	 */

	onSearchVestibulandoCpf(vestibulandoCpf: any) {

		this.entity = this.service.newEntityInstance();

		var exists = false;
		this.listaVestibulando.forEach((item) => {
			if (item.cpf === vestibulandoCpf) {
				this.entity.vestibulando = item;

				exists = true;
			}
		});

		if (!exists) {
			this.setResultMessage("FAILURE", "Ou não há vestibulando com este CPF, ou é um vestibulando não aprovado ou já é discente matriculado!");
		}
	}

	/*
	 * Compare methods
	 */

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

}