import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaDto } from '../../../dto/disciplina/dto';
import { DisciplinaService } from '../../../service/disciplina/service';

@Component({
	selector: 'app-disciplina-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DisciplinaAddComponent extends AbstractAddComponent<Disciplina, DisciplinaDto, DisciplinaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: DisciplinaService,
		protected route: ActivatedRoute) {
		super(service, route, 'disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}