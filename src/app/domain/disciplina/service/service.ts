import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractService } from '../../abstract/service/service';
import { Disciplina } from '../entity/entity';
import { DisciplinaDto } from '../dto/dto';

import { EstruturaCurricularDto } from '../../estrutura-curricular/dto/dto';

@Injectable()
export class DisciplinaService extends AbstractService<Disciplina, DisciplinaDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'disciplina';

	constructor(protected httpClient: HttpClient) {
		super(httpClient, DisciplinaService.apiUrl + DisciplinaService.apiPath);
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
		entity.nome = dto.nome;

		return entity;
	}

	public findAllEstruturaCurricularById(id: number): Observable<EstruturaCurricularDto[]> {
		return this.http.get<EstruturaCurricularDto[]>(this.apiUrl + '/' + id + "/estrutura-curricular");
	}

	public deleteEstruturaCurricular(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/estrutura-curricular/" + subId);
	}

	public insertEstruturaCurricular(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/estrutura-curricular/" + subId, subId);
	}
}
