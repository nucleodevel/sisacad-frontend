import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../../dto/avaliacao-vestibulando/dto';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-avaliacao-vestibulando-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoEditComponent extends AbstractEditComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> {

	listaVestibulando!: Vestibulando[];

	constructor(protected service: AvaliacaoVestibulandoService,
		protected route: ActivatedRoute, protected vestibulandoService: VestibulandoService) {
		super(service, route, 'avaliacao-vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();

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