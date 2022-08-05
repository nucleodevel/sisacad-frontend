import { AbstractDto } from '../abstract/dto';
import { Aula } from '../../domain/aula/entity';

export class AulaDto extends AbstractDto<Aula> {
	inicio!: number;
	termino!: number;
	ofertaDisciplina!: number;

	copyFromEntity(entity: Aula) {
		this.id = entity.id;
		
		this.inicio = entity.inicio.getTime();
		this.termino = entity.termino.getTime();

		if (entity.ofertaDisciplina != null) {
			this.ofertaDisciplina = entity.ofertaDisciplina.id;
		}
	}
}
