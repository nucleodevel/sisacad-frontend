import { AbstractDto } from '../abstract/dto';
import { Vestibulando } from '../../domain/vestibulando/entity';

export class VestibulandoDto extends AbstractDto<Vestibulando> {
	cpf!: string;
	nome!: string;
	ofertaCurso!: number;

	copyFromEntity(entity: Vestibulando) {
		this.id = entity.id;

		this.cpf = entity.cpf;
		this.nome = entity.nome;

		if (entity.ofertaCurso != null) {
			this.ofertaCurso = entity.ofertaCurso.id;
		}
	}
}
