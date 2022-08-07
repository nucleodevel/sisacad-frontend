import { AbstractDto } from '../abstract/dto';
import { Vestibulando } from '../../domain/vestibulando/entity';

export class VestibulandoDto extends AbstractDto<Vestibulando> {
	cpf!: string;
	nome!: string;
	dataNascimento!: number;
	endereco!: string;
	telefones!: string;
	ofertaCurso!: number;

	copyFromEntity(entity: Vestibulando) {
		this.id = entity.id;

		this.cpf = entity.cpf;
		this.nome = entity.nome;
		this.dataNascimento = entity.dataNascimento.getTime();
		this.endereco = entity.endereco;
		this.telefones = entity.telefones;

		if (entity.ofertaCurso != null) {
			this.ofertaCurso = entity.ofertaCurso.id;
		}
	}
}
