import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { DocenteUsuario } from '../../../domain/docente-usuario/entity';
import { DocenteUsuarioDto } from '../../../dto/docente-usuario/dto';
import { DocenteUsuarioService } from '../../../service/docente-usuario/service';

import { Docente } from '../../../domain/docente/entity';
import { Usuario } from '../../../domain/usuario/entity';

@Component({
	selector: 'app-docente-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteEditComponent extends AbstractEditComponent<DocenteUsuario, DocenteUsuarioDto, DocenteUsuarioService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: DocenteUsuarioService, protected route: ActivatedRoute) {
		super(service, route, 'docente');
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

	}

}