import { AbstractDto } from '../abstract/dto';
import { AvaliacaoVestibulando } from '../../domain/avaliacao-vestibulando/entity';

export class AvaliacaoVestibulandoDto extends AbstractDto<AvaliacaoVestibulando> {
	conceitoFinal!: number;
	vestibulando!: number;

	copyFromEntity(entity: AvaliacaoVestibulando) {
		this.id = entity.id;

		this.conceitoFinal = entity.conceitoFinal;

		if (entity.vestibulando != null) {
			this.vestibulando = entity.vestibulando.id;
		}
	}
}
