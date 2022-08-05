import { AbstractEntity } from '../abstract/entity';

import { OfertaDisciplina } from '../oferta-disciplina/entity';

export class Aula extends AbstractEntity {
	inicio!: Date;
	termino!: Date;
	ofertaDisciplina!: OfertaDisciplina;

	toString(): string {
		return this.ofertaDisciplina.toString() + " - " + this.inicio + "-" + this.termino;
	}
}
