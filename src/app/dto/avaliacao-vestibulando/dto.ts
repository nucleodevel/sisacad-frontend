import { AbstractDto } from '../abstract/dto';
import { AvaliacaoVestibulando } from '../../domain/avaliacao-vestibulando/entity';

export class AvaliacaoVestibulandoDto extends AbstractDto<AvaliacaoVestibulando> {
	conceitoBiologicas!: number;
	conceitoExatas!: number;
	conceitoHumanas!: number;
	conceitoFinal!: number;
	vestibulando!: number;

	copyFromEntity(entity: AvaliacaoVestibulando) {
		this.id = entity.id;

		this.conceitoBiologicas = entity.conceitoBiologicas;
		this.conceitoExatas = entity.conceitoExatas;
		this.conceitoHumanas = entity.conceitoHumanas;
		this.conceitoFinal = entity.conceitoFinal;

		if (entity.vestibulando != null) {
			this.vestibulando = entity.vestibulando.id;
		}
	}
}
