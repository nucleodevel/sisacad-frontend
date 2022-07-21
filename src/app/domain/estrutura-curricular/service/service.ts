import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractService } from '../../abstract/service/service';
import { EstruturaCurricular } from '../entity/entity';
import { EstruturaCurricularDto } from '../dto/dto';

import { CursoService } from '../../curso/service/service';

import { DisciplinaDto } from '../../disciplina/dto/dto';

@Injectable()
export class EstruturaCurricularService extends AbstractService<EstruturaCurricular, EstruturaCurricularDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'estrutura-curricular';

	constructor(protected httpClient: HttpClient, protected cursoService: CursoService) {
		super(httpClient, EstruturaCurricularService.apiUrl + EstruturaCurricularService.apiPath);
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
		entity.anoInicio = dto.anoInicio;
		entity.anoTermino = dto.anoTermino;

		this.cursoService.findById(dto.curso).subscribe(data => {
			console.log(data)
			entity.curso = this.cursoService.makeEntityFromDto(data);
		}, error => console.log(error));

		return entity;
	}

	public findAllDisciplinaById(id: number): Observable<DisciplinaDto[]> {
		return this.http.get<DisciplinaDto[]>(this.apiUrl + '/' + id + "/disciplina");
	}

	public deleteDisciplina(id: number, subId: number) {
		return this.http.delete<number>(this.apiUrl + '/' + id + "/disciplina/" + subId);
	}

	public insertDisciplina(id: number, subId: number) {
		return this.http.post<number>(this.apiUrl + '/' + id + "/disciplina/" + subId, subId);
	}
}
