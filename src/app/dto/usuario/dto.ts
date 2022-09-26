import { AbstractDto } from '../abstract/dto';
import { Usuario } from '../../domain/usuario/entity';

export class UsuarioDto extends AbstractDto<Usuario> {
	username!: string;
	password!: string;
	roles!: string;

	copyFromEntity(entity: Usuario) {
		this.id = entity.id;
		this.username = entity.username;
		this.password = entity.password;
		this.roles = entity.roles;
	}
}
