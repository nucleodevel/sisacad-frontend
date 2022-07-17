import { AbstractEntity } from '../../abstract/entity/entity';

import { Vestibular } from '../../vestibular/entity/entity';
import { EstruturaCurricular } from '../../estrutura-curricular/entity/entity';

export class OfertaCurso extends AbstractEntity {
  ano!: number;
  vestibular!: Vestibular;
  estruturaCurricular!: EstruturaCurricular;

  toString(): string {
	return this.estruturaCurricular.curso.toString() + " - " + this.ano; 
  }
}
