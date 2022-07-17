import { AbstractEntity } from '../../abstract/entity/entity';

import { Curso } from '../../curso/entity/entity';

export class EstruturaCurricular extends AbstractEntity {
  anoInicio!: number;
  anoTermino!: number;
  curso!: Curso;

  toString(): string {
	return this.curso.toString() + "/" + this.anoInicio + "-" + this.anoTermino; 
  }
}
