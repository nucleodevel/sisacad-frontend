import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { ParticipacaoAula } from '../../domain/participacao-aula/entity';
import { ParticipacaoAulaDto } from '../../dto/participacao-aula/dto';

import { AulaService } from '../../service/aula/service';
import { DiscenteService } from '../../service/discente/service';

@Injectable()
export class ParticipacaoAulaService extends AbstractService<ParticipacaoAula, ParticipacaoAulaDto> {

	private static readonly apiPath = 'participacao-aula';

	constructor(protected httpClient: HttpClient, protected aulaService: AulaService, protected discenteService: DiscenteService) {
		super(httpClient, ParticipacaoAulaService.apiPath);
	}

	newEntityInstance(): ParticipacaoAula {
		return new ParticipacaoAula();
	}

	newDtoInstance(): ParticipacaoAulaDto {
		return new ParticipacaoAulaDto();
	}

	makeEntityFromDto(dto: ParticipacaoAulaDto): ParticipacaoAula {
		var entity = this.newEntityInstance();

		entity.id = dto.id;

		this.aulaService.findById(dto.aula).subscribe(data => {
			console.log(data);
			entity.aula = this.aulaService.makeEntityFromDto(data);
		});

		this.discenteService.findById(dto.discente).subscribe(data => {
			console.log(data);
			entity.discente = this.discenteService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findByAulaAndDiscente(aulaId: number, discenteId: number): Observable<ParticipacaoAulaDto> {
		return this.http.get<ParticipacaoAulaDto>(this.apiUrl + '/aula/' + aulaId + '/discente/' + discenteId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
