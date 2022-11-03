import { AbstractEntity } from '../abstract/entity';

import { Vestibulando } from '../vestibulando/entity';
import { Usuario } from '../usuario/entity';

export class VestibulandoUsuario extends AbstractEntity {
	vestibulando!: Vestibulando;
	usuario!: Usuario;

	toString(): string {
		return this.vestibulando.cpf + ' - ' + this.usuario.nome + ' / ' + this.vestibulando.ofertaCurso.toString();
	}
}
