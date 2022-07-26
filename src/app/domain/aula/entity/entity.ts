import { AbstractEntity } from '../../abstract/entity/entity';

import { OfertaDisciplina } from '../../oferta-disciplina/entity/entity';

export class Aula extends AbstractEntity {
  inicio!: number;
  termino!: number;
  ofertaDisciplina!: OfertaDisciplina;

  toString(): string {
	return this.ofertaDisciplina.toString() + " - " + this.inicio + "-" + this.termino; 
  }
}
