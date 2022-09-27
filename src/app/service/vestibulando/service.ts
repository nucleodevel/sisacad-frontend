import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { Vestibulando } from '../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../dto/vestibulando/dto';

import { OfertaCursoService } from '../../service/oferta-curso/service';
import { UsuarioService } from '../../service/usuario/service';

@Injectable()
export class VestibulandoService extends AbstractService<Vestibulando, VestibulandoDto> {

	private static readonly apiPath = 'vestibulando';

	constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService,
		protected usuarioService: UsuarioService) {

		super(httpClient, VestibulandoService.apiPath);
	}

	newEntityInstance(): Vestibulando {
		return new Vestibulando();
	}

	newDtoInstance(): VestibulandoDto {
		return new VestibulandoDto();
	}

	makeEntityFromDto(dto: VestibulandoDto): Vestibulando {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.cpf = dto.cpf;
		entity.dataNascimento = new Date(dto.dataNascimento);
		entity.endereco = dto.endereco;
		entity.telefones = dto.telefones;

		this.ofertaCursoService.findById(dto.ofertaCurso).subscribe(data => {
			console.log(data);
			entity.ofertaCurso = this.ofertaCursoService.makeEntityFromDto(data);
		});

		this.usuarioService.findById(dto.usuario).subscribe(data => {
			console.log(data);
			entity.usuario = this.usuarioService.makeEntityFromDto(data);
		});

		return entity;
	}

	public findAllIsNotDiscente(): Observable<VestibulandoDto[]> {
		return this.http.get<VestibulandoDto[]>(this.apiUrl + "/is-not-discente").pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
}
