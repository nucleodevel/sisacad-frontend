import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { ParticipacaoAvaliacao } from '../../domain/participacao-avaliacao/entity';
import { ParticipacaoAvaliacaoDto } from '../../dto/participacao-avaliacao/dto';

import { AvaliacaoService } from '../../service/avaliacao/service';
import { DiscenteService } from '../../service/discente/service';

@Injectable()
export class ParticipacaoAvaliacaoService extends AbstractService<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto> {

	private static readonly apiPath = 'participacao-avaliacao';

	constructor(protected httpClient: HttpClient, protected avaliacaoService: AvaliacaoService, protected discenteService: DiscenteService) {
		super(httpClient, ParticipacaoAvaliacaoService.apiPath);
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
		entity.conceitoFinal = dto.conceitoFinal;

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
