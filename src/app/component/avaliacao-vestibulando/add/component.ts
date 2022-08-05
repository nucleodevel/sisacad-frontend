import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../../dto/avaliacao-vestibulando/dto';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-avaliacao-vestibulando-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoAddComponent extends AbstractAddComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaVestibulando!: Vestibulando[];

	constructor(protected service: AvaliacaoVestibulandoService, protected route: ActivatedRoute,
		protected vestibulandoService: VestibulandoService) {

		super(service, route, 'avaliacao-vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional() {

		this.vestibulandoService.findAll().subscribe(data => {
			this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

	}

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

}