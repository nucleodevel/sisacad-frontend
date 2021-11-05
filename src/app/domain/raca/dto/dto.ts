import { AbstractDto } from '../../abstract/dto/dto';
import { Raca } from '../entity/entity';

export class RacaDto extends AbstractDto<Raca> {
  descricao!: string;

  copyFromEntity(entity: Raca) {
	this.id = entity.id;
	this.descricao = entity.descricao;
  }
}
