import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Avaliacao } from '../entity/entity';
import { AvaliacaoDto } from '../dto/dto';

import { OfertaDisciplinaService } from '../../oferta-disciplina/service/service';

@Injectable()
export class AvaliacaoService extends AbstractService<Avaliacao, AvaliacaoDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'avaliacao';

	constructor(protected httpClient: HttpClient, protected ofertaDisciplinaService: OfertaDisciplinaService) {
		super(httpClient, AvaliacaoService.apiUrl + AvaliacaoService.apiPath);
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
		entity.inicio = dto.inicio;
		entity.termino = dto.termino;

		this.ofertaDisciplinaService.findById(dto.ofertaDisciplina).subscribe(data => {
			console.log(data)
			entity.ofertaDisciplina = this.ofertaDisciplinaService.makeEntityFromDto(data);
		});

		return entity;
	}
}
