import { AbstractEntity } from '../../abstract/entity/entity';

import { OfertaCurso } from '../../oferta-curso/entity/entity';

export class Turma extends AbstractEntity {
  ofertaCurso!: OfertaCurso;

  toString(): string {
	return this.ofertaCurso.toString(); 
  }
}
