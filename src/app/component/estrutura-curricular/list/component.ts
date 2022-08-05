import { Component, ViewChild, ElementRef } from '@angular/core';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularDto } from '../../../dto/estrutura-curricular/dto';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

@Component({
	selector: 'app-estrutura-curricular-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class EstruturaCurricularListComponent extends AbstractListComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: EstruturaCurricularService) {
		super(service, 'estrutura-curricular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional() {

	}

}