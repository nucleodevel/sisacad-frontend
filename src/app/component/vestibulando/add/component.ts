import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../../dto/avaliacao-vestibulando/dto';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

@Component({
	selector: 'app-vestibulando-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoAddComponent extends AbstractAddComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

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

	ngOnInitSuperAdditional() {

		this.avaliacaoVestibulando = new AvaliacaoVestibulando();

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
			if (!this.preencherAvaliacao) {
				this.list();
			} else {
				var avaliacaoVestibulandoDto = new AvaliacaoVestibulandoDto();
				avaliacaoVestibulandoDto.copyFromEntity(this.avaliacaoVestibulando);

				avaliacaoVestibulandoDto.vestibulando = result.id;
				this.avaliacaoVestibulandoService.insert(avaliacaoVestibulandoDto).subscribe(avResult => {
					this.list();
				}, error => {
					this.setResultMessage("FAILURE", error);
				});
			}

		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	/*
	 * Compare methods
	 */

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

}