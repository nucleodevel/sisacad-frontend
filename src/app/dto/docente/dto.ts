import { AbstractDto } from '../abstract/dto';
import { Docente } from '../../domain/docente/entity';

export class DocenteDto extends AbstractDto<Docente> {
	cpf!: string;
	nome!: string;

	copyFromEntity(entity: Docente) {
		this.id = entity.id;
		this.cpf = entity.cpf;
		this.nome = entity.nome;
	}
}
