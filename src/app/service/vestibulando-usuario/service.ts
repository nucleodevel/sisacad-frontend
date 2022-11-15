import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { VestibulandoUsuario } from '../../domain/vestibulando-usuario/entity';
import { VestibulandoUsuarioDto } from '../../dto/vestibulando-usuario/dto';

import { OfertaCursoService } from '../../service/oferta-curso/service';
import { UsuarioService } from '../../service/usuario/service';

import { Vestibulando } from '../../domain/vestibulando/entity';
import { Usuario } from '../../domain/usuario/entity';

@Injectable()
export class VestibulandoUsuarioService extends AbstractService<VestibulandoUsuario, VestibulandoUsuarioDto> {

	private static readonly apiPath = 'vestibulando-usuario';

	constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService,
		protected usuarioService: UsuarioService) {

		super(httpClient, VestibulandoUsuarioService.apiPath);
	}

	newEntityInstance(): VestibulandoUsuario {

		var docenteUsuario = new VestibulandoUsuario();

		docenteUsuario.vestibulando = new Vestibulando();
		docenteUsuario.usuario = new Usuario();

		return docenteUsuario;
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

		this.ofertaCursoService.findById(dto.vestibulando.ofertaCurso).subscribe(data => {
			entity.vestibulando.ofertaCurso = this.ofertaCursoService.makeEntityFromDto(data);
		});

		entity.usuario.id = dto.usuario.id;
		entity.usuario.username = dto.usuario.username;
		entity.usuario.password = dto.usuario.password;
		entity.usuario.nome = dto.usuario.nome;
		entity.usuario.email = dto.usuario.email;
		entity.usuario.roles = dto.usuario.roles;

		return entity;
	}
}
