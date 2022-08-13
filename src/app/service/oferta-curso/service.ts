import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { OfertaCurso } from '../../domain/oferta-curso/entity';
import { OfertaCursoDto } from '../../dto/oferta-curso/dto';

import { VestibularService } from '../../service/vestibular/service';
import { EstruturaCurricularService } from '../../service/estrutura-curricular/service';

@Injectable()
export class OfertaCursoService extends AbstractService<OfertaCurso, OfertaCursoDto> {

	private static readonly apiPath = 'oferta-curso';

	constructor(protected httpClient: HttpClient, protected vestibularService: VestibularService,
		protected estruturaCurricularService: EstruturaCurricularService) {
		super(httpClient, OfertaCursoService.apiPath);
	}

	newEntityInstance(): OfertaCurso {
		return new OfertaCurso();
	}

	newDtoInstance(): OfertaCursoDto {
		return new OfertaCursoDto();
	}

	makeEntityFromDto(dto: OfertaCursoDto): OfertaCurso {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.codigo = dto.codigo;
		entity.ano = dto.ano;

		this.vestibularService.findById(dto.vestibular).subscribe(data => {
			console.log(data);
			entity.vestibular = this.vestibularService.makeEntityFromDto(data);
		});

		this.estruturaCurricularService.findById(dto.estruturaCurricular).subscribe(data => {
			console.log(data);
			entity.estruturaCurricular = this.estruturaCurricularService.makeEntityFromDto(data);
		});

		return entity;
	}
}
