import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { EstruturaCurricular } from '../../domain/estrutura-curricular/entity';
import { EstruturaCurricularDto } from '../../dto/estrutura-curricular/dto';

import { CursoService } from '../../service/curso/service';

import { DisciplinaDto } from '../../dto/disciplina/dto';

@Injectable()
export class EstruturaCurricularService extends AbstractService<EstruturaCurricular, EstruturaCurricularDto> {

	private static readonly apiPath = 'estrutura-curricular';

	constructor(protected httpClient: HttpClient, protected cursoService: CursoService) {
		super(httpClient, EstruturaCurricularService.apiPath);
	}

	newEntityInstance(): EstruturaCurricular {
		return new EstruturaCurricular();
	}

	newDtoInstance(): EstruturaCurricularDto {
		return new EstruturaCurricularDto();
	}

	makeEntityFromDto(dto: EstruturaCurricularDto): EstruturaCurricular {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.codigo = dto.codigo;
		entity.anoInicio = dto.anoInicio;
		entity.anoTermino = dto.anoTermino;

		this.cursoService.findById(dto.curso).subscribe(data => {
			console.log(data);
			entity.curso = this.cursoService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findAllDisciplinaById(id: number): Observable<DisciplinaDto[]> {
		return this.http.get<DisciplinaDto[]>(this.apiUrl + '/' + id + "/disciplina").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public deleteDisciplina(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/disciplina/" + subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public insertDisciplina(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/disciplina/" + subId, subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
