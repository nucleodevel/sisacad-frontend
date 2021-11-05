import { AbstractDto } from '../../abstract/dto/dto';
import { Cidade } from '../entity/entity';

export class CidadeDto extends AbstractDto<Cidade> {
  nome!: string;
  estado!: number;

  copyFromEntity(entity: Cidade) {
	this.id = entity.id;
	this.nome = entity.nome;
	if (entity.estado != null) {
	  this.estado = entity.estado.id;
	}	
  }
}
