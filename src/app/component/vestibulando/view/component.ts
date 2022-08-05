import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-vestibulando-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoViewComponent extends AbstractViewComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: VestibulandoService, protected route: ActivatedRoute) {
		super(service, route, 'vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional(dto: VestibulandoDto) {

	}

}