import { AbstractEntity } from '../../abstract/entity/entity';

import { Vestibulando } from '../../vestibulando/entity/entity';

export class Discente extends AbstractEntity {
  vestibulando!: Vestibulando;

  toString(): string {
	return this.vestibulando.toString(); 
  }
}
