import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AppConfig } from '../../app.config';

import { AbstractEntity } from '../../domain/abstract/entity';
import { AbstractDto } from '../../dto/abstract/dto';

export abstract class AbstractService<E extends AbstractEntity, DTO extends AbstractDto<E>> {

	protected http: HttpClient;
	protected apiUrl: string;
	protected apiEndpoint: string = AppConfig.API_ENDPOINT;

	protected httpHeaders: any;

	constructor(http: HttpClient, apiPath: string) {
		this.http = http;
		this.apiUrl = this.apiEndpoint + apiPath;
		
		var username = localStorage.getItem("username"); 
		if (username == null || username == '') {
			localStorage.setItem('username', 'user01');
			localStorage.setItem('password', 'password01');
		}
		
		username = localStorage.getItem("username");
		var password = localStorage.getItem("password");
		
		this.httpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(username +  ':' + password) })
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
		const headers = this.httpHeaders;
		return this.http.post<DTO>(this.apiUrl, dto, {headers}).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public update(id: number, dto: DTO) {
		const headers = this.httpHeaders;
		return this.http.put<DTO>(this.apiUrl + '/' + id, dto, {headers}).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public delete(id: number) {
		const headers = this.httpHeaders;
		return this.http.delete<DTO>(this.apiUrl + '/' + id, {headers}).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findById(id: number) {
		const headers = this.httpHeaders;
		return this.http.get<DTO>(this.apiUrl + '/' + id, {headers}).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

	public findAll(): Observable<DTO[]> {
		const headers = this.httpHeaders;
		return this.http.get<DTO[]>(this.apiUrl, {headers}).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}

}
