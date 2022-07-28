import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { AvaliacaoVestibulando } from '../entity/entity';
import { AvaliacaoVestibulandoDto } from '../dto/dto';

import { VestibulandoService } from '../../vestibulando/service/service';

@Injectable()
export class AvaliacaoVestibulandoService extends AbstractService<AvaliacaoVestibulando, AvaliacaoVestibulandoDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'avaliacao-vestibulando';

	constructor(protected httpClient: HttpClient, protected vestibulandoService: VestibulandoService) {
		super(httpClient, AvaliacaoVestibulandoService.apiUrl + AvaliacaoVestibulandoService.apiPath);
	}

	newEntityInstance(): AvaliacaoVestibulando {
		return new AvaliacaoVestibulando();
	}

	newDtoInstance(): AvaliacaoVestibulandoDto {
		return new AvaliacaoVestibulandoDto();
	}

	makeEntityFromDto(dto: AvaliacaoVestibulandoDto): AvaliacaoVestibulando {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.conceitoFinal = dto.conceitoFinal;

		this.vestibulandoService.findById(dto.vestibulando).subscribe(data => {
			console.log(data);
			entity.vestibulando = this.vestibulandoService.makeEntityFromDto(data);
		});

		return entity;
	}
}
