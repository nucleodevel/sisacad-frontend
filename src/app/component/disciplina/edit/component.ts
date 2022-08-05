import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaDto } from '../../../dto/disciplina/dto';
import { DisciplinaService } from '../../../service/disciplina/service';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

@Component({
	selector: 'app-disciplina-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DisciplinaEditComponent extends AbstractEditComponent<Disciplina, DisciplinaDto, DisciplinaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: DisciplinaService, protected estruturaCurricularService: EstruturaCurricularService,
		protected route: ActivatedRoute) {
		super(service, route, 'disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

	compareEstruturaCurricular(o1: EstruturaCurricular, o2: EstruturaCurricular) {
		return o1.compare(o2);
	}

}