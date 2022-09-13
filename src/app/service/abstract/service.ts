import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AppConfig } from '../../app.config';

import { AbstractEntity } from '../../domain/abstract/entity';
import { AbstractDto } from '../../dto/abstract/dto';

export abstract class AbstractService<E extends AbstractEntity, DTO extends AbstractDto<E>> {

	protected http: HttpClient;
	protected apiUrl: string;
	protected apiEndpoint: string = AppConfig.API_ENDPOINT;

	constructor(http: HttpClient, apiPath: string) {
		this.http = http;
		this.apiUrl = this.apiEndpoint + apiPath;
	}

	abstract newEntityInstance(): E;
	abstract newDtoInstance(): DTO;

	abstract makeEntityFromDto(dto: DTO): E;

	public makeEntityArrayFromDtoArray(dtos: DTO[]) {
		var entities: E[];
		entities = [];

		dtos.forEach(dto => {
			var entity = this.makeEntityFromDto(dto);
			entities.push(entity);
		});

		return entities;
	}

	public insert(dto: DTO) {
		return this.http.post<DTO>(this.apiUrl, dto).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public update(id: number, dto: DTO) {
		return this.http.put<DTO>(this.apiUrl + '/' + id, dto).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public delete(id: number) {
		return this.http.delete<DTO>(this.apiUrl + '/' + id).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findById(id: number) {
		return this.http.get<DTO>(this.apiUrl + '/' + id).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findAll(): Observable<DTO[]> {
		return this.http.get<DTO[]>(this.apiUrl).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

}
