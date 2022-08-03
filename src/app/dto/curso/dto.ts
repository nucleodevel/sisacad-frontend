import { AbstractDto } from '../abstract/dto';
import { Curso } from '../../domain/curso/entity';

export class CursoDto extends AbstractDto<Curso> {
	codigo!: string;
	nome!: string;

	copyFromEntity(entity: Curso) {
		this.id = entity.id;
		this.codigo = entity.codigo;
		this.nome = entity.nome;
	}
}
