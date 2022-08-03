import { AbstractEntity } from '../abstract/entity';

import { Disciplina } from '../disciplina/entity';
import { Docente } from '../docente/entity';

export class OfertaDisciplina extends AbstractEntity {
	codigo!: string;
	disciplina!: Disciplina;
	docente!: Docente;

	toString(): string {
		return this.id + " - " + this.codigo;
	}
}
