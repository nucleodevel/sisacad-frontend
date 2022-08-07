import { AbstractEntity } from '../abstract/entity';

import { Vestibulando } from '../vestibulando/entity';

export class AvaliacaoVestibulando extends AbstractEntity {
  conceitoBiologicas!: number;
  conceitoExatas!: number;
  conceitoHumanas!: number;
  conceitoFinal!: number;
  vestibulando!: Vestibulando;

  toString(): string {
	return this.vestibulando.toString(); 
  }
}
