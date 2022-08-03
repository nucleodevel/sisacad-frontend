import { AbstractEntity } from '../abstract/entity';

import { Aula } from '../aula/entity';
import { Discente } from '../discente/entity';

export class ParticipacaoAula extends AbstractEntity {
  aula!: Aula;
  discente!: Discente;

  toString(): string {
	return this.aula.toString() + "/" + this.discente.toString(); 
  }
}
