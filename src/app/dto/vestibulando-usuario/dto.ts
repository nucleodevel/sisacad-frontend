import { AbstractDto } from '../abstract/dto';
import { VestibulandoUsuario } from '../../domain/vestibulando-usuario/entity';

import { VestibulandoDto } from '../../dto/vestibulando/dto';
import { UsuarioDto } from '../../dto/usuario/dto';

export class VestibulandoUsuarioDto extends AbstractDto<VestibulandoUsuario> {

	vestibulando!: VestibulandoDto;
	usuario!: UsuarioDto;

	copyFromEntity(entity: VestibulandoUsuario) {
		this.vestibulando = new VestibulandoDto();
		this.usuario = new UsuarioDto();

		this.id = entity.id;

		this.vestibulando.cpf = entity.vestibulando.cpf;

		if (entity.vestibulando.dataNascimento != null) {
			this.vestibulando.dataNascimento = entity.vestibulando.dataNascimento.getTime();
		}

		this.vestibulando.endereco = entity.vestibulando.endereco;
		this.vestibulando.telefones = entity.vestibulando.telefones;

		if (entity.vestibulando.ofertaCurso != null) {
			this.vestibulando.ofertaCurso = entity.vestibulando.ofertaCurso.id;
		}

		this.usuario.id = entity.usuario.id;
		this.usuario.username = entity.usuario.username;
		this.usuario.password = entity.usuario.password;
		this.usuario.nome = entity.usuario.nome;
		this.usuario.email = entity.usuario.email;
		this.usuario.roles = entity.usuario.roles;
	}
}
