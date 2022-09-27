import { AbstractEntity } from '../abstract/entity';

import { Usuario } from '../usuario/entity';

export class Docente extends AbstractEntity {
	cpf!: string;
	dataNascimento!: Date;
	endereco!: string;
	telefones!: string;
	usuario!: Usuario;

	toString(): string {
		return this.cpf + ' - ' + this.usuario.nome;
	}
}
