import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { Turma } from '../../domain/turma/entity';
import { TurmaDto } from '../../dto/turma/dto';

import { OfertaCursoService } from '../../service/oferta-curso/service';

import { OfertaDisciplinaDto } from '../../dto/oferta-disciplina/dto';

@Injectable()
export class TurmaService extends AbstractService<Turma, TurmaDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'turma';

	constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService) {
		super(httpClient, TurmaService.apiUrl + TurmaService.apiPath);
	}

	newEntityInstance(): Turma {
		return new Turma();
	}

	newDtoInstance(): TurmaDto {
		return new TurmaDto();
	}

	makeEntityFromDto(dto: TurmaDto): Turma {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.codigo = dto.codigo;

		this.ofertaCursoService.findById(dto.ofertaCurso).subscribe(data => {
			console.log(data);
			entity.ofertaCurso = this.ofertaCursoService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findAllOfertaDisciplinaById(id: number): Observable<OfertaDisciplinaDto[]> {
		return this.http.get<OfertaDisciplinaDto[]>(this.apiUrl + '/' + id + "/oferta-disciplina").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public deleteOfertaDisciplina(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/oferta-disciplina/" + subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public insertOfertaDisciplina(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/oferta-disciplina/" + subId, subId).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
