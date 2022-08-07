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
	listaVestibulandoAutocomplete!: Vestibulando[];

	lastkeydown1: number = 0;

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

		this.vestibulandoService.findAllIsNotDiscente().subscribe(data => {
			this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

	}

	/*
	 * Form events
	 */

	keyUpVestibulando($event: any) {
		let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
		this.listaVestibulandoAutocomplete = [];

		if (userId.length > 2) {
			if ($event.timeStamp - this.lastkeydown1 > 200) {
				this.listaVestibulandoAutocomplete = this.searchFromArray(this.listaVestibulando, userId);
			}
		}
	}

	searchFromArray(arr: any, regex: any) {
		let matches = [], i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].match(regex)) {
				matches.push(arr[i]);
			}
		}
		return matches;
	};

	/*
	 * Compare methods
	 */

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

}