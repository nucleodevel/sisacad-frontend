import { AbstractDto } from '../../abstract/dto/dto';
import { Cliente } from '../entity/entity';

export class ClienteDto extends AbstractDto<Cliente> {
  tipo!: string;
  pessoa!: number;

  copyFromEntity(entity: Cliente) {
	this.id = entity.id;
	this.tipo = entity.tipo;
	if (entity.pessoa != null) {
	  this.pessoa = entity.pessoa.id;
	}	
  }
}
