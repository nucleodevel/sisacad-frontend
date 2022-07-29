import { AbstractDto } from '../../abstract/dto/dto';
import { Curso } from '../entity/entity';

export class CursoDto extends AbstractDto<Curso> {
	codigo!: string;
	nome!: string;

	copyFromEntity(entity: Curso) {
		this.id = entity.id;
		this.codigo = entity.codigo;
		this.nome = entity.nome;
	}
}
