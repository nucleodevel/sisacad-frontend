import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { Usuario } from '../../domain/usuario/entity';
import { UsuarioDto } from '../../dto/usuario/dto';

@Injectable()
export class UsuarioService extends AbstractService<Usuario, UsuarioDto> {

	private static readonly apiPath = 'usuario';

	constructor(protected httpClient: HttpClient) {
		super(httpClient, UsuarioService.apiPath);
	}

	newEntityInstance(): Usuario {
		return new Usuario();
	}

	newDtoInstance(): UsuarioDto {
		return new UsuarioDto();
	}

	makeEntityFromDto(dto: UsuarioDto): Usuario {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.username = dto.username;
		entity.password = dto.password;
		entity.nome = dto.nome;
		entity.email = dto.email;

		return entity;
	}
}
