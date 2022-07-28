import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { AbstractService } from '../../abstract/service/service';
import { Discente } from '../entity/entity';
import { DiscenteDto } from '../dto/dto';

import { VestibulandoService } from '../../vestibulando/service/service';

import { OfertaDisciplinaDto } from '../../oferta-disciplina/dto/dto';

@Injectable()
export class DiscenteService extends AbstractService<Discente, DiscenteDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'discente';

	constructor(protected httpClient: HttpClient, protected vestibulandoService: VestibulandoService) {
		super(httpClient, DiscenteService.apiUrl + DiscenteService.apiPath);
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
