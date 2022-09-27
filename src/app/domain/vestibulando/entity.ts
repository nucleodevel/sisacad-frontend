import { AbstractEntity } from '../abstract/entity';

import { OfertaCurso } from '../oferta-curso/entity';
import { Usuario } from '../usuario/entity';

export class Vestibulando extends AbstractEntity {
	cpf!: string;
	dataNascimento!: Date;
	endereco!: string;
	telefones!: string;
	ofertaCurso!: OfertaCurso;
	usuario!: Usuario;

	toString(): string {
		return this.cpf + ' - ' + this.usuario.nome + ' / ' + this.ofertaCurso.toString();
	}
}
