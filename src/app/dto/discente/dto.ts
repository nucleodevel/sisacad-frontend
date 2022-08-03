import { AbstractDto } from '../abstract/dto';
import { Discente } from '../../domain/discente/entity';

export class DiscenteDto extends AbstractDto<Discente> {
	vestibulando!: number;

	copyFromEntity(entity: Discente) {
		this.id = entity.id;

		if (entity.vestibulando != null) {
			this.vestibulando = entity.vestibulando.id;
		}
	}
}
