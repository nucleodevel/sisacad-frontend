import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../../dto/avaliacao-vestibulando/dto';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

import { Usuario } from '../../../domain/usuario/entity';
import { UsuarioDto } from '../../../dto/usuario/dto';
import { UsuarioService } from '../../../service/usuario/service';

@Component({
	selector: 'app-vestibulando-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoEditComponent extends AbstractEditComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaOfertaCurso!: OfertaCurso[];

	avaliacaoVestibulando!: AvaliacaoVestibulando;

	preencherAvaliacao = false;

	/*
	 * Constructors
	 */

	constructor(protected service: VestibulandoService, protected route: ActivatedRoute,
		protected avaliacaoVestibulandoService: AvaliacaoVestibulandoService,
		protected ofertaCursoService: OfertaCursoService,
		protected usuarioService: UsuarioService) {

		super(service, route, 'vestibulando');
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

	ngOnInitSuperAdditional(dto: VestibulandoDto) {

		this.avaliacaoVestibulandoService.findByVestibulando(dto.id).subscribe(data => {
			if (data) {
				this.avaliacaoVestibulando = this.avaliacaoVestibulandoService.makeEntityFromDto(data);
				this.preencherAvaliacao = true;
			} else {
				this.avaliacaoVestibulando = new AvaliacaoVestibulando();
				this.preencherAvaliacao = false;
			}
		}, error => {
			// this.setResultMessage("FAILURE", error);
			this.avaliacaoVestibulando = new AvaliacaoVestibulando();
			this.preencherAvaliacao = false;
		});

		this.ofertaCursoService.findAll().subscribe(data => {
			this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);

		var usuario = this.entity.usuario;
		var usuarioDto = new UsuarioDto();
		usuarioDto.copyFromEntity(usuario);

		this.usuarioService.update(usuario.id, usuarioDto).subscribe(resultUsuario => {
			this.service.update(this.id, dto).subscribe(result => {

				if (!this.preencherAvaliacao) {
					if (this.avaliacaoVestibulando.id) {
						this.avaliacaoVestibulandoService.delete(this.avaliacaoVestibulando.id).subscribe(avResult => {
							this.setResultMessage("SUCCESS", "Editado com sucesso");
						}, error => {
							this.setResultMessage("FAILURE", error);
						});
					}
					this.setResultMessage("SUCCESS", "Editado com sucesso");
				} else {
					var avaliacaoVestibulandoDto = new AvaliacaoVestibulandoDto();
					avaliacaoVestibulandoDto.copyFromEntity(this.avaliacaoVestibulando);

					if (avaliacaoVestibulandoDto.id) {
						this.avaliacaoVestibulandoService.update(avaliacaoVestibulandoDto.id, avaliacaoVestibulandoDto).subscribe(avResult => {
							this.setResultMessage("SUCCESS", "Editado com sucesso");
						}, error => {
							this.setResultMessage("FAILURE", error);
						});
					} else {
						avaliacaoVestibulandoDto.vestibulando = dto.id;
						this.avaliacaoVestibulandoService.insert(avaliacaoVestibulandoDto).subscribe(avResult => {
							this.setResultMessage("SUCCESS", "Editado com sucesso");
						}, error => {
							this.setResultMessage("FAILURE", error);
						});
					}
				}
			}, error => {
				this.setResultMessage("FAILURE", error);
			});
		}, errorUsuario => {
			this.setResultMessage("FAILURE", errorUsuario);
		});
	}

	/*
	 * Compare methods
	 */

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

}