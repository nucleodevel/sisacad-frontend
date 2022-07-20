import { AbstractEntity } from '../../abstract/entity/entity';

import { Avaliacao } from '../../avaliacao/entity/entity';
import { Discente } from '../../discente/entity/entity';

export class ParticipacaoAvaliacao extends AbstractEntity {
  avaliacao!: Avaliacao;
  discente!: Discente;

  toString(): string {
	return this.avaliacao.toString() + "/" + this.discente.toString(); 
  }
}
