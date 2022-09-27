import { AbstractDto } from '../abstract/dto';
import { Docente } from '../../domain/docente/entity';

export class DocenteDto extends AbstractDto<Docente> {
	cpf!: string;
	dataNascimento!: number;
	endereco!: string;
	telefones!: string;
	usuario!: number;

	copyFromEntity(entity: Docente) {
		this.id = entity.id;
		this.cpf = entity.cpf;
		this.dataNascimento = entity.dataNascimento.getTime();
		this.endereco = entity.endereco;
		this.telefones = entity.telefones;

		if (entity.usuario != null) {
			this.usuario = entity.usuario.id;
		}
	}
}
