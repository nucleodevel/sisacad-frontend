import { AbstractDto } from '../../abstract/dto/dto';
import { OfertaCurso } from '../entity/entity';

export class OfertaCursoDto extends AbstractDto<OfertaCurso> {
	codigo!: string;
	ano!: number;
	vestibular!: number;
	estruturaCurricular!: number;

	copyFromEntity(entity: OfertaCurso) {
		this.id = entity.id;
		this.codigo = entity.codigo;
		this.ano = entity.ano;

		if (entity.vestibular != null) {
			this.vestibular = entity.vestibular.id;
		}

		if (entity.estruturaCurricular != null) {
			this.estruturaCurricular = entity.estruturaCurricular.id;
		}
	}
}
