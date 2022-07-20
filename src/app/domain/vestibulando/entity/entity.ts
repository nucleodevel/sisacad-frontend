import { AbstractEntity } from '../../abstract/entity/entity';

import { OfertaCurso } from '../../oferta-curso/entity/entity';

export class Vestibulando extends AbstractEntity {
  nome!: string;
  ofertaCurso!: OfertaCurso;

  toString(): string {
	return this.nome + "/" + this.ofertaCurso.toString(); 
  }
}
