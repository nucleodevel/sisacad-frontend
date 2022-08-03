import { AbstractDto } from '../abstract/dto';
import { ParticipacaoAvaliacao } from '../../domain/participacao-avaliacao/entity';

export class ParticipacaoAvaliacaoDto extends AbstractDto<ParticipacaoAvaliacao> {
	avaliacao!: number;
	discente!: number;

	copyFromEntity(entity: ParticipacaoAvaliacao) {
		this.id = entity.id;

		if (entity.avaliacao != null) {
			this.avaliacao = entity.avaliacao.id;
		}

		if (entity.discente != null) {
			this.discente = entity.discente.id;
		}
	}
}
