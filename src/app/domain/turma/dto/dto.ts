import { AbstractDto } from '../../abstract/dto/dto';
import { Turma } from '../entity/entity';

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
