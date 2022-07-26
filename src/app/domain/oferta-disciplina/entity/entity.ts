import { AbstractEntity } from '../../abstract/entity/entity';

import { Disciplina } from '../../disciplina/entity/entity';
import { Docente } from '../../docente/entity/entity';

export class OfertaDisciplina extends AbstractEntity {
  disciplina!: Disciplina;
  docente!: Docente;

  toString(): string {
	return this.id + " - " + this.disciplina.toString() + "/" + this.docente.toString(); 
  }
}
