import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Vestibular } from '../../../domain/vestibular/entity';
import { VestibularDto } from '../../../dto/vestibular/dto';
import { VestibularService } from '../../../service/vestibular/service';

@Component({
	selector: 'app-vestibular-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibularListComponent extends AbstractListComponent<Vestibular, VestibularDto, VestibularService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: VestibularService,
		) {
		super(service, 'vestibular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}