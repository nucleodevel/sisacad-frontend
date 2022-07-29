import { AbstractEntity } from '../../abstract/entity/entity';

import { Disciplina } from '../../disciplina/entity/entity';
import { Docente } from '../../docente/entity/entity';

export class OfertaDisciplina extends AbstractEntity {
	codigo!: string;
	disciplina!: Disciplina;
	docente!: Docente;

	toString(): string {
		return this.id + " - " + this.codigo;
	}
}
