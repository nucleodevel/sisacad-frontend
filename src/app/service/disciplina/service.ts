import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { Disciplina } from '../../domain/disciplina/entity';
import { DisciplinaDto } from '../../dto/disciplina/dto';

import { EstruturaCurricularDto } from '../../dto/estrutura-curricular/dto';

@Injectable()
export class DisciplinaService extends AbstractService<Disciplina, DisciplinaDto> {

	private static readonly apiPath = 'disciplina';

	constructor(protected httpClient: HttpClient) {
		super(httpClient, DisciplinaService.apiPath);
	}

	newEntityInstance(): Disciplina {
		return new Disciplina();
	}

	newDtoInstance(): DisciplinaDto {
		return new DisciplinaDto();
	}

	makeEntityFromDto(dto: DisciplinaDto): Disciplina {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.codigo = dto.codigo;
		entity.nome = dto.nome;

		return entity;
	}

	public findAllEstruturaCurricularById(id: number): Observable<EstruturaCurricularDto[]> {
		return this.http.get<EstruturaCurricularDto[]>(this.apiUrl + '/' + id + "/estrutura-curricular").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public deleteEstruturaCurricular(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/estrutura-curricular/" + subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public insertEstruturaCurricular(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/estrutura-curricular/" + subId, subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
