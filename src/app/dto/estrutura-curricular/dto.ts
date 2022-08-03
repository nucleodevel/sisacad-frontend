import { AbstractDto } from '../abstract/dto';
import { EstruturaCurricular } from '../../domain/estrutura-curricular/entity';

export class EstruturaCurricularDto extends AbstractDto<EstruturaCurricular> {
	codigo!: string;
	anoInicio!: number;
	anoTermino!: number;
	curso!: number;

	copyFromEntity(entity: EstruturaCurricular) {
		this.id = entity.id;

		this.codigo = entity.codigo;
		this.anoInicio = entity.anoInicio;
		this.anoTermino = entity.anoTermino;

		if (entity.curso != null) {
			this.curso = entity.curso.id;
		}
	}
}
