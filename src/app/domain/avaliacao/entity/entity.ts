import { AbstractEntity } from '../../abstract/entity/entity';

import { OfertaDisciplina } from '../../oferta-disciplina/entity/entity';

export class Avaliacao extends AbstractEntity {
  descricao!: string;
  inicio!: number;
  termino!: number;
  ofertaDisciplina!: OfertaDisciplina;

  toString(): string {
	return this.ofertaDisciplina.toString() + " - " + this.descricao; 
  }
}
