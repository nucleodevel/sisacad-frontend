import { AbstractDto } from '../abstract/dto';
import { Docente } from '../../domain/docente/entity';

export class DocenteDto extends AbstractDto<Docente> {
	cpf!: string;
	nome!: string;
	dataNascimento!: number;
	endereco!: string;
	telefones!: string;

	copyFromEntity(entity: Docente) {
		this.id = entity.id;
		this.cpf = entity.cpf;
		this.nome = entity.nome;
		this.dataNascimento = entity.dataNascimento.getTime();
		this.endereco = entity.endereco;
		this.telefones = entity.telefones;
	}
}
