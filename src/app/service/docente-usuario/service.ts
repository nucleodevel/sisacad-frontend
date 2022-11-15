import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { DocenteUsuario } from '../../domain/docente-usuario/entity';
import { DocenteUsuarioDto } from '../../dto/docente-usuario/dto';

import { OfertaCursoService } from '../../service/oferta-curso/service';
import { UsuarioService } from '../../service/usuario/service';

import { Docente } from '../../domain/docente/entity';
import { Usuario } from '../../domain/usuario/entity';

@Injectable()
export class DocenteUsuarioService extends AbstractService<DocenteUsuario, DocenteUsuarioDto> {

	private static readonly apiPath = 'docente-usuario';

	constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService,
		protected usuarioService: UsuarioService) {

		super(httpClient, DocenteUsuarioService.apiPath);
	}

	newEntityInstance(): DocenteUsuario {

		var docenteUsuario = new DocenteUsuario();

		docenteUsuario.docente = new Docente();
		docenteUsuario.usuario = new Usuario();

		return docenteUsuario;
	}

	newDtoInstance(): DocenteUsuarioDto {
		return new DocenteUsuarioDto();
	}

	makeEntityFromDto(dto: DocenteUsuarioDto): DocenteUsuario {
		var entity = this.newEntityInstance();

		entity.id = dto.id;

		entity.docente.id = dto.docente.id;
		entity.docente.cpf = dto.docente.cpf;
		entity.docente.dataNascimento = new Date(dto.docente.dataNascimento);
		entity.docente.endereco = dto.docente.endereco;
		entity.docente.telefones = dto.docente.telefones;

		entity.usuario.id = dto.usuario.id;
		entity.usuario.username = dto.usuario.username;
		entity.usuario.password = dto.usuario.password;
		entity.usuario.nome = dto.usuario.nome;
		entity.usuario.email = dto.usuario.email;
		entity.usuario.roles = dto.usuario.roles;
		
		entity.docente.usuario = entity.usuario;

		return entity;
	}
}
