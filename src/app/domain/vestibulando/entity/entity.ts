import { AbstractEntity } from '../../abstract/entity/entity';

import { OfertaCurso } from '../../oferta-curso/entity/entity';

export class Vestibulando extends AbstractEntity {
	cpf!: string;
	nome!: string;
	ofertaCurso!: OfertaCurso;

	toString(): string {
		return this.cpf + ' / ' + this.ofertaCurso.toString();
	}
}
