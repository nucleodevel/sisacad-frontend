import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { ParticipacaoAvaliacao } from '../entity/entity';
import { ParticipacaoAvaliacaoDto } from '../dto/dto';

import { AvaliacaoService } from '../../avaliacao/service/service';
import { DiscenteService } from '../../discente/service/service';

@Injectable()
export class ParticipacaoAvaliacaoService extends AbstractService<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'participacao-avaliacao';

	constructor(protected httpClient: HttpClient, protected avaliacaoService: AvaliacaoService, protected discenteService: DiscenteService) {
		super(httpClient, ParticipacaoAvaliacaoService.apiUrl + ParticipacaoAvaliacaoService.apiPath);
	}

	newEntityInstance(): ParticipacaoAvaliacao {
		return new ParticipacaoAvaliacao();
	}

	newDtoInstance(): ParticipacaoAvaliacaoDto {
		return new ParticipacaoAvaliacaoDto();
	}

	makeEntityFromDto(dto: ParticipacaoAvaliacaoDto): ParticipacaoAvaliacao {
		var entity = this.newEntityInstance();

		entity.id = dto.id;

		this.avaliacaoService.findById(dto.avaliacao).subscribe(data => {
			console.log(data);
			entity.avaliacao = this.avaliacaoService.makeEntityFromDto(data);
		});

		this.discenteService.findById(dto.discente).subscribe(data => {
			console.log(data);
			entity.discente = this.discenteService.makeEntityFromDto(data);
		});

		return entity;
	}
}
