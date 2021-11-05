import { AbstractDto } from '../../abstract/dto/dto';
import { Estado } from '../entity/entity';

export class EstadoDto extends AbstractDto<Estado> {
  nome!: string;

  copyFromEntity(entity: Estado) {
	this.id = entity.id;
	this.nome = entity.nome;
  }
}
