import { AbstractDto } from '../abstract/dto';
import { ParticipacaoAvaliacao } from '../../domain/participacao-avaliacao/entity';

export class ParticipacaoAvaliacaoDto extends AbstractDto<ParticipacaoAvaliacao> {
	conceitoFinal!: number;
	avaliacao!: number;
	discente!: number;

	copyFromEntity(entity: ParticipacaoAvaliacao) {
		this.id = entity.id;
		
		this.conceitoFinal = entity.conceitoFinal;

		if (entity.avaliacao != null) {
			this.avaliacao = entity.avaliacao.id;
		}

		if (entity.discente != null) {
			this.discente = entity.discente.id;
		}
	}
}
