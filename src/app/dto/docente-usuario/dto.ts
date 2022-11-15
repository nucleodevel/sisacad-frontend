import { AbstractDto } from '../abstract/dto';
import { DocenteUsuario } from '../../domain/docente-usuario/entity';

import { DocenteDto } from '../../dto/docente/dto';
import { UsuarioDto } from '../../dto/usuario/dto';

export class DocenteUsuarioDto extends AbstractDto<DocenteUsuario> {

	docente!: DocenteDto;
	usuario!: UsuarioDto;

	copyFromEntity(entity: DocenteUsuario) {
		this.docente = new DocenteDto();
		this.usuario = new UsuarioDto();

		this.id = entity.id;

		this.docente.id = entity.docente.id;
		this.docente.cpf = entity.docente.cpf;

		if (entity.docente.dataNascimento != null) {
			this.docente.dataNascimento = entity.docente.dataNascimento.getTime();
		}

		this.docente.endereco = entity.docente.endereco;
		this.docente.telefones = entity.docente.telefones;
		this.docente.usuario = entity.usuario.id;

		this.usuario.id = entity.usuario.id;
		this.usuario.username = entity.usuario.username;
		this.usuario.password = entity.usuario.password;
		this.usuario.nome = entity.usuario.nome;
		this.usuario.email = entity.usuario.email;
		this.usuario.roles = entity.usuario.roles;
	}
}
