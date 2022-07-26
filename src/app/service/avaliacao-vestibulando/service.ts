import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { AvaliacaoVestibulando } from '../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../dto/avaliacao-vestibulando/dto';

import { VestibulandoService } from '../../service/vestibulando/service';

@Injectable()
export class AvaliacaoVestibulandoService extends AbstractService<AvaliacaoVestibulando, AvaliacaoVestibulandoDto> {

	private static readonly apiPath = 'avaliacao-vestibulando';

	constructor(protected httpClient: HttpClient, protected vestibulandoService: VestibulandoService) {
		super(httpClient, AvaliacaoVestibulandoService.apiPath);
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
		entity.conceitoBiologicas = dto.conceitoBiologicas;
		entity.conceitoExatas = dto.conceitoExatas;
		entity.conceitoHumanas = dto.conceitoHumanas;
		entity.conceitoFinal = dto.conceitoFinal;

		this.vestibulandoService.findById(dto.vestibulando).subscribe(data => {
			console.log(data);
			entity.vestibulando = this.vestibulandoService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findByVestibulando(vestibulandoId: number): Observable<AvaliacaoVestibulandoDto> {
		return this.http.get<AvaliacaoVestibulandoDto>(this.apiUrl + "/vestibulando/" + vestibulandoId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
