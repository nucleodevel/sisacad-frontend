import { AbstractEntity } from '../abstract/entity';

import { Vestibulando } from '../vestibulando/entity';

export class Discente extends AbstractEntity {
  vestibulando!: Vestibulando;

  toString(): string {
	return this.vestibulando.toString(); 
  }
}
