import { AbstractDto } from '../../abstract/dto/dto';
import { Especie } from '../entity/entity';

export class EspecieDto extends AbstractDto<Especie> {
  descricao!: string;

  copyFromEntity(entity: Especie) {
	this.id = entity.id;
	this.descricao = entity.descricao;
  }
}
