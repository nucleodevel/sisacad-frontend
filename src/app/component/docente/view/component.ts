import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Docente } from '../../../domain/docente/entity';
import { DocenteDto } from '../../../dto/docente/dto';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-docente-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteViewComponent extends AbstractViewComponent<Docente, DocenteDto, DocenteService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: DocenteService,
		protected route: ActivatedRoute) {
		super(service, route, 'docente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}