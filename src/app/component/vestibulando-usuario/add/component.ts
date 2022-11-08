import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { VestibulandoUsuario } from '../../../domain/vestibulando-usuario/entity';
import { VestibulandoUsuarioDto } from '../../../dto/vestibulando-usuario/dto';
import { VestibulandoUsuarioService } from '../../../service/vestibulando-usuario/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { Usuario } from '../../../domain/usuario/entity';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

@Component({
	selector: 'app-vestibulando-usuario-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoUsuarioAddComponent extends AbstractAddComponent<VestibulandoUsuario, VestibulandoUsuarioDto, VestibulandoUsuarioService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaOfertaCurso!: OfertaCurso[];

	/*
	 * Constructors
	 */

	constructor(protected service: VestibulandoUsuarioService, protected route: ActivatedRoute,
		protected ofertaCursoService: OfertaCursoService) {

		super(service, route, 'vestibulando-usuario');
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

		this.entity.vestibulando = new Vestibulando();
		this.entity.usuario = new Usuario();

		this.ofertaCursoService.findAll().subscribe(data => {
			this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.insert(dto).subscribe(result => {
			this.setResultMessage("SUCCESS", "Vestibulando inscrito com sucesso!");
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	closeResultMessage() {
		var redirectToList = this.resultStatus == 'SUCCESS';

		this.resultStatus = "";
		this.resultMessage = "";

		if (redirectToList) {
			this.router.navigate(['login']);
		}
	}

	/*
	 * Compare methods
	 */

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

}