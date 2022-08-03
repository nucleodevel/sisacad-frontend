import { AbstractEntity } from '../abstract/entity';

import { Vestibulando } from '../vestibulando/entity';

export class AvaliacaoVestibulando extends AbstractEntity {
  conceitoFinal!: number;
  vestibulando!: Vestibulando;

  toString(): string {
	return this.vestibulando.toString(); 
  }
}
