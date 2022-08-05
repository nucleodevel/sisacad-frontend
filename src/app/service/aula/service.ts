import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { Aula } from '../../domain/aula/entity';
import { AulaDto } from '../../dto/aula/dto';

import { OfertaDisciplinaService } from '../../service/oferta-disciplina/service';

import { ParticipacaoAulaDto } from '../../dto/participacao-aula/dto';

import { DiscenteDto } from '../../dto/discente/dto';

@Injectable()
export class AulaService extends AbstractService<Aula, AulaDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'aula';

	constructor(protected httpClient: HttpClient, protected ofertaDisciplinaService: OfertaDisciplinaService) {
		super(httpClient, AulaService.apiUrl + AulaService.apiPath);
	}

	newEntityInstance(): Aula {
		return new Aula();
	}

	newDtoInstance(): AulaDto {
		return new AulaDto();
	}

	makeEntityFromDto(dto: AulaDto): Aula {
		var entity = this.newEntityInstance();

		entity.id = dto.id;

		entity.inicio = new Date(dto.inicio);
		entity.termino = new Date(dto.termino);

		this.ofertaDisciplinaService.findById(dto.ofertaDisciplina).subscribe(data => {
			console.log(data);
			entity.ofertaDisciplina = this.ofertaDisciplinaService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findAllParticipacaoAulaById(id: number): Observable<ParticipacaoAulaDto[]> {
		return this.http.get<ParticipacaoAulaDto[]>(this.apiUrl + '/' + id + "/participacao-aula").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findAllDiscenteParticipanteById(id: number): Observable<DiscenteDto[]> {
		return this.http.get<DiscenteDto[]>(this.apiUrl + '/' + id + "/discente-participante").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
