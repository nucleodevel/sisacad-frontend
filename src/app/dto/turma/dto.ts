import { AbstractDto } from '../abstract/dto';
import { Turma } from '../../domain/turma/entity';

export class TurmaDto extends AbstractDto<Turma> {
	codigo!: string;
	ofertaCurso!: number;

	copyFromEntity(entity: Turma) {
		this.id = entity.id;
		this.codigo = entity.codigo;

		if (entity.ofertaCurso != null) {
			this.ofertaCurso = entity.ofertaCurso.id;
		}
	}
}
