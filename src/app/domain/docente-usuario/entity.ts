import { AbstractEntity } from '../abstract/entity';

import { Docente } from '../docente/entity';
import { Usuario } from '../usuario/entity';

export class DocenteUsuario extends AbstractEntity {
	docente!: Docente;
	usuario!: Usuario;

	toString(): string {
		return this.docente.cpf + ' - ' + this.usuario.nome;
	}
}
