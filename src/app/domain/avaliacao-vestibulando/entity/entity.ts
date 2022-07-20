import { AbstractEntity } from '../../abstract/entity/entity';

import { Vestibulando } from '../../vestibulando/entity/entity';

export class AvaliacaoVestibulando extends AbstractEntity {
  conceitoFinal!: number;
  vestibulando!: Vestibulando;

  toString(): string {
	return this.vestibulando.toString(); 
  }
}
