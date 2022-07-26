import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { Discente } from '../../domain/discente/entity';
import { DiscenteDto } from '../../dto/discente/dto';

import { VestibulandoService } from '../../service/vestibulando/service';

import { AulaDto } from '../../dto/aula/dto';
import { OfertaDisciplinaDto } from '../../dto/oferta-disciplina/dto';

@Injectable()
export class DiscenteService extends AbstractService<Discente, DiscenteDto> {

	private static readonly apiPath = 'discente';

	constructor(protected httpClient: HttpClient, protected vestibulandoService: VestibulandoService) {
		super(httpClient, DiscenteService.apiPath);
	}

	newEntityInstance(): Discente {
		return new Discente();
	}

	newDtoInstance(): DiscenteDto {
		return new DiscenteDto();
	}

	makeEntityFromDto(dto: DiscenteDto): Discente {
		var entity = this.newEntityInstance();

		entity.id = dto.id;

		this.vestibulandoService.findById(dto.vestibulando).subscribe(data => {
			console.log(data);
			entity.vestibulando = this.vestibulandoService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findByUsername(username: string) {
		return this.http.get<DiscenteDto[]>(this.apiUrl + '/by-username/' + username).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findAllOfertaDisciplinaById(id: number): Observable<OfertaDisciplinaDto[]> {
		return this.http.get<OfertaDisciplinaDto[]>(this.apiUrl + '/' + id + "/oferta-disciplina").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findAllAulaById(id: number): Observable<AulaDto[]> {
		return this.http.get<AulaDto[]>(this.apiUrl + '/' + id + "/aula").pipe(
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
