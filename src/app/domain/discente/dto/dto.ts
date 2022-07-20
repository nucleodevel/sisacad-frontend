import { AbstractDto } from '../../abstract/dto/dto';
import { Discente } from '../entity/entity';

export class DiscenteDto extends AbstractDto<Discente> {
  vestibulando!: number;

  copyFromEntity(entity: Discente) {
	this.id = entity.id;
	
	if (entity.vestibulando != null) {
	  this.vestibulando = entity.vestibulando.id;
	}	
  }
}
