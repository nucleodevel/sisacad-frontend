import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { Docente } from '../../domain/docente/entity';
import { DocenteDto } from '../../dto/docente/dto';

import { DiscenteDto } from '../../dto/discente/dto';

import { UsuarioService } from '../../service/usuario/service';

@Injectable()
export class DocenteService extends AbstractService<Docente, DocenteDto> {

	private static readonly apiPath = 'docente';

	constructor(protected httpClient: HttpClient, protected usuarioService: UsuarioService) {
		super(httpClient, DocenteService.apiPath);
	}

	newEntityInstance(): Docente {
		return new Docente();
	}

	newDtoInstance(): DocenteDto {
		return new DocenteDto();
	}

	makeEntityFromDto(dto: DocenteDto): Docente {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.cpf = dto.cpf;
		entity.dataNascimento = new Date(dto.dataNascimento);
		entity.endereco = dto.endereco;
		entity.telefones = dto.telefones;

		this.usuarioService.findById(dto.usuario).subscribe(data => {
			console.log(data);
			entity.usuario = this.usuarioService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findByUsername(username: string) {
		const headers = this.httpHeaders;
		return this.http.get<DocenteDto[]>(this.apiUrl + '/?username=' + username).pipe(
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
}
