import { AbstractDto } from '../../abstract/dto/dto';
import { Disciplina } from '../entity/entity';

export class DisciplinaDto extends AbstractDto<Disciplina> {
	codigo!: string;
	nome!: string;

	copyFromEntity(entity: Disciplina) {
		this.id = entity.id;
		this.codigo = entity.codigo;
		this.nome = entity.nome;
	}
}
