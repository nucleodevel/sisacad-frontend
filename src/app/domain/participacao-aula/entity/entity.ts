import { AbstractEntity } from '../../abstract/entity/entity';

import { Aula } from '../../aula/entity/entity';
import { Discente } from '../../discente/entity/entity';

export class ParticipacaoAula extends AbstractEntity {
  aula!: Aula;
  discente!: Discente;

  toString(): string {
	return this.aula.toString() + "/" + this.discente.toString(); 
  }
}
