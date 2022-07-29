import { AbstractDto } from '../../abstract/dto/dto';
import { OfertaDisciplina } from '../entity/entity';

export class OfertaDisciplinaDto extends AbstractDto<OfertaDisciplina> {
	codigo!: string;
	disciplina!: number;
	docente!: number;

	copyFromEntity(entity: OfertaDisciplina) {
		this.id = entity.id;
		this.codigo = entity.codigo;

		if (entity.disciplina != null) {
			this.disciplina = entity.disciplina.id;
		}

		if (entity.docente != null) {
			this.docente = entity.docente.id;
		}
	}
}
