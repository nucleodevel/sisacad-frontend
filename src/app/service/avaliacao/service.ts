import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { Avaliacao } from '../../domain/avaliacao/entity';
import { AvaliacaoDto } from '../../dto/avaliacao/dto';

import { OfertaDisciplinaService } from '../../service/oferta-disciplina/service';

@Injectable()
export class AvaliacaoService extends AbstractService<Avaliacao, AvaliacaoDto> {

	private static readonly apiPath = 'avaliacao';

	constructor(protected httpClient: HttpClient, protected ofertaDisciplinaService: OfertaDisciplinaService) {
		super(httpClient, AvaliacaoService.apiPath);
	}

	newEntityInstance(): Avaliacao {
		return new Avaliacao();
	}

	newDtoInstance(): AvaliacaoDto {
		return new AvaliacaoDto();
	}

	makeEntityFromDto(dto: AvaliacaoDto): Avaliacao {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.descricao = dto.descricao;

		entity.inicio = new Date(dto.inicio);
		entity.termino = new Date(dto.termino);

		this.ofertaDisciplinaService.findById(dto.ofertaDisciplina).subscribe(data => {
			console.log(data);
			entity.ofertaDisciplina = this.ofertaDisciplinaService.makeEntityFromDto(data);
		});

		return entity;
	}
}
