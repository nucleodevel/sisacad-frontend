import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
		}, error => console.log(error));

		this.docenteService.findById(dto.docente).subscribe(data => {
			console.log(data)
			entity.docente = this.docenteService.makeEntityFromDto(data);
		}, error => console.log(error));

		return entity;
	}

	public findAllTurmaById(id: number): Observable<TurmaDto[]> {
		return this.http.get<TurmaDto[]>(this.apiUrl + '/' + id + "/turma");
	}

	public deleteTurma(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/turma/" + subId);
	}

	public insertTurma(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/turma/" + subId, subId);
	}

	public findAllDiscenteById(id: number): Observable<DiscenteDto[]> {
		return this.http.get<DiscenteDto[]>(this.apiUrl + '/' + id + "/discente");
	}

	public deleteDiscente(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/discente/" + subId);
	}

	public insertDiscente(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/discente/" + subId, subId);
	}
	
}
