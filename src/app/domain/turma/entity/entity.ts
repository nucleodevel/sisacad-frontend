import { AbstractEntity } from '../../abstract/entity/entity';

import { OfertaCurso } from '../../oferta-curso/entity/entity';

export class Turma extends AbstractEntity {
	codigo!: string;
	ofertaCurso!: OfertaCurso;

	toString(): string {
		return this.codigo + ' - ' + this.ofertaCurso.toString();
	}
}
