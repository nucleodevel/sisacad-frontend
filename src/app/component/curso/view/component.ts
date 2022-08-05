import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Curso } from '../../../domain/curso/entity';
import { CursoDto } from '../../../dto/curso/dto';
import { CursoService } from '../../../service/curso/service';

@Component({
	selector: 'app-curso-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoViewComponent extends AbstractViewComponent<Curso, CursoDto, CursoService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: CursoService,
		protected route: ActivatedRoute) {
		super(service, route, 'curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}
	
	ngOnInitSuperAdditional(dto: CursoDto) {
		
	}

}