import { AbstractEntity } from '../abstract/entity';

import { Avaliacao } from '../avaliacao/entity';
import { Discente } from '../discente/entity';

export class ParticipacaoAvaliacao extends AbstractEntity {
	conceitoFinal!: number;
	avaliacao!: Avaliacao;
	discente!: Discente;

	toString(): string {
		return this.avaliacao.toString() + "/" + this.discente.toString();
	}
}
