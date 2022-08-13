import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { Curso } from '../../domain/curso/entity';
import { CursoDto } from '../../dto/curso/dto';

@Injectable()
export class CursoService extends AbstractService<Curso, CursoDto> {

	private static readonly apiPath = 'curso';

	constructor(protected httpClient: HttpClient) {
		super(httpClient, CursoService.apiPath);
	}

	newEntityInstance(): Curso {
		return new Curso();
	}

	newDtoInstance(): CursoDto {
		return new CursoDto();
	}

	makeEntityFromDto(dto: CursoDto): Curso {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.codigo = dto.codigo;
		entity.nome = dto.nome;

		return entity;
	}
}
