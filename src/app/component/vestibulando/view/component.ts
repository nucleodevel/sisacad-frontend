import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

@Component({
	selector: 'app-vestibulando-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoViewComponent extends AbstractViewComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	avaliacaoVestibulando!: AvaliacaoVestibulando;

	/*
	 * Constructors
	 */

	constructor(protected service: VestibulandoService, protected route: ActivatedRoute,
		protected avaliacaoVestibulandoService: AvaliacaoVestibulandoService) {

		super(service, route, 'vestibulando');
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

	ngOnInitSuperAdditional(dto: VestibulandoDto) {

		this.avaliacaoVestibulandoService.findByVestibulando(dto.id).subscribe(data => {
			if (data) {
				this.avaliacaoVestibulando = this.avaliacaoVestibulandoService.makeEntityFromDto(data);
			} else {
				this.avaliacaoVestibulando = new AvaliacaoVestibulando();
			}
		}, error => {
			// this.setResultMessage("FAILURE", error);
		});

	}

}