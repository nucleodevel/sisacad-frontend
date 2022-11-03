import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AbstractService } from '../abstract/service';

import { VestibulandoUsuario } from '../../domain/vestibulando-usuario/entity';
import { VestibulandoUsuarioDto } from '../../dto/vestibulando-usuario/dto';

import { OfertaCursoService } from '../../service/oferta-curso/service';
import { UsuarioService } from '../../service/usuario/service';

@Injectable()
export class VestibulandoUsuarioService extends AbstractService<VestibulandoUsuario, VestibulandoUsuarioDto> {

	private static readonly apiPath = 'vestibulando-usuario';

	constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService,
		protected usuarioService: UsuarioService) {

		super(httpClient, VestibulandoUsuarioService.apiPath);
	}

	newEntityInstance(): VestibulandoUsuario {
		return new VestibulandoUsuario();
	}

	newDtoInstance(): VestibulandoUsuarioDto {
		return new VestibulandoUsuarioDto();
	}

	makeEntityFromDto(dto: VestibulandoUsuarioDto): VestibulandoUsuario {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		
		entity.vestibulando.cpf = dto.vestibulando.cpf;
		entity.vestibulando.dataNascimento = new Date(dto.vestibulando.dataNascimento);
		entity.vestibulando.endereco = dto.vestibulando.endereco;
		entity.vestibulando.telefones = dto.vestibulando.telefones;

		entity.usuario.id = dto.usuario.id;
		entity.usuario.username = dto.usuario.username;
		entity.usuario.password = dto.usuario.password;
		entity.usuario.nome = dto.usuario.nome;
		entity.usuario.email = dto.usuario.email;

		return entity;
	}
}
