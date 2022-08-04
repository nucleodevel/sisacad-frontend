import { AbstractDto } from '../abstract/dto';
import { Avaliacao } from '../../domain/avaliacao/entity';

export class AvaliacaoDto extends AbstractDto<Avaliacao> {
	descricao!: string;
	inicio!: number;
	termino!: number;
	ofertaDisciplina!: number;

	copyFromEntity(entity: Avaliacao) {
		this.id = entity.id;

		this.descricao = entity.descricao;
		
		this.inicio = entity.inicio.getTime();
		this.termino = entity.termino.getTime();

		if (entity.ofertaDisciplina != null) {
			this.ofertaDisciplina = entity.ofertaDisciplina.id;
		}
	}
}
