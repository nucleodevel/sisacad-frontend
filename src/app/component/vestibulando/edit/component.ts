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
		protected ofertaCursoService: OfertaCursoService) {

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
			// this.setErrorMessage(error);
			this.avaliacaoVestibulando = new AvaliacaoVestibulando();
			this.preencherAvaliacao = false;
		});

		this.ofertaCursoService.findAll().subscribe(data => {
			this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.update(this.id, dto).subscribe(result => {
			if (!this.preencherAvaliacao) {
				this.list();
			} else {
				var avaliacaoVestibulandoDto = new AvaliacaoVestibulandoDto();
				avaliacaoVestibulandoDto.copyFromEntity(this.avaliacaoVestibulando);

				if (avaliacaoVestibulandoDto.id) {
					this.avaliacaoVestibulandoService.update(avaliacaoVestibulandoDto.id, avaliacaoVestibulandoDto).subscribe(avResult => {
						this.list();
					}, error => {
						this.setErrorMessage(error);
					});
				} else {
					avaliacaoVestibulandoDto.vestibulando = dto.id;
					this.avaliacaoVestibulandoService.insert(avaliacaoVestibulandoDto).subscribe(avResult => {
						this.list();
					}, error => {
						this.setErrorMessage(error);
					});
				}
			}
		}, error => {
			this.setErrorMessage(error);
		});
	}

	/*
	 * Compare methods
	 */

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

}