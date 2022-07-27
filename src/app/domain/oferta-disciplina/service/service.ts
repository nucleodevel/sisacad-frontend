import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../../abstract/service/service';
import { OfertaDisciplina } from '../entity/entity';
import { OfertaDisciplinaDto } from '../dto/dto';

import { DisciplinaService } from '../../disciplina/service/service';
import { DocenteService } from '../../docente/service/service';

import { TurmaDto } from '../../turma/dto/dto';

import { DiscenteDto } from '../../discente/dto/dto';

@Injectable()
export class OfertaDisciplinaService extends AbstractService<OfertaDisciplina, OfertaDisciplinaDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'oferta-disciplina';

	constructor(protected httpClient: HttpClient, protected disciplinaService: DisciplinaService, protected docenteService: DocenteService) {
		super(httpClient, OfertaDisciplinaService.apiUrl + OfertaDisciplinaService.apiPath);
	}

	newEntityInstance(): OfertaDisciplina {
		return new OfertaDisciplina();
	}

	newDtoInstance(): OfertaDisciplinaDto {
		return new OfertaDisciplinaDto();
	}

	makeEntityFromDto(dto: OfertaDisciplinaDto): OfertaDisciplina {
		var entity = this.newEntityInstance();

		entity.id = dto.id;

		this.disciplinaService.findById(dto.disciplina).subscribe(data => {
			console.log(data)
			entity.disciplina = this.disciplinaService.makeEntityFromDto(data);
		});

		this.docenteService.findById(dto.docente).subscribe(data => {
			console.log(data)
			entity.docente = this.docenteService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findAllTurmaById(id: number): Observable<TurmaDto[]> {
		return this.http.get<TurmaDto[]>(this.apiUrl + '/' + id + "/turma").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public deleteTurma(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/turma/" + subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public insertTurma(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/turma/" + subId, subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findAllDiscenteById(id: number): Observable<DiscenteDto[]> {
		return this.http.get<DiscenteDto[]>(this.apiUrl + '/' + id + "/discente").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public deleteDiscente(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/discente/" + subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public insertDiscente(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/discente/" + subId, subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

}
