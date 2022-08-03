import { AbstractDto } from '../abstract/dto';
import { Disciplina } from '../../domain/disciplina/entity';

export class DisciplinaDto extends AbstractDto<Disciplina> {
	codigo!: string;
	nome!: string;

	copyFromEntity(entity: Disciplina) {
		this.id = entity.id;
		this.codigo = entity.codigo;
		this.nome = entity.nome;
	}
}
