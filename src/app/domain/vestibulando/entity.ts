import { AbstractEntity } from '../abstract/entity';

import { OfertaCurso } from '../oferta-curso/entity';

export class Vestibulando extends AbstractEntity {
	cpf!: string;
	nome!: string;
	dataNascimento!: Date;
	endereco!: string;
	telefones!: string;
	ofertaCurso!: OfertaCurso;

	toString(): string {
		return this.cpf + ' - ' + this.nome + ' / ' + this.ofertaCurso.toString();
	}
}
