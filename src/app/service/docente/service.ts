import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { Docente } from '../../domain/docente/entity';
import { DocenteDto } from '../../dto/docente/dto';

@Injectable()
export class DocenteService extends AbstractService<Docente, DocenteDto> {

	private static readonly apiPath = 'docente';

	constructor(protected httpClient: HttpClient) {
		super(httpClient, DocenteService.apiPath);
	}

	newEntityInstance(): Docente {
		return new Docente();
	}

	newDtoInstance(): DocenteDto {
		return new DocenteDto();
	}

	makeEntityFromDto(dto: DocenteDto): Docente {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.cpf = dto.cpf;
		entity.nome = dto.nome;
		entity.dataNascimento = new Date(dto.dataNascimento);
		entity.endereco = dto.endereco;
		entity.telefones = dto.telefones;

		return entity;
	}
}
