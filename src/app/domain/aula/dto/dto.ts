import { AbstractDto } from '../../abstract/dto/dto';
import { Aula } from '../entity/entity';

export class AulaDto extends AbstractDto<Aula> {
  inicio!: number;
  termino!: number;
  ofertaDisciplina!: number;

  copyFromEntity(entity: Aula) {
	this.id = entity.id;
	if (entity.ofertaDisciplina != null) {
	  this.ofertaDisciplina = entity.ofertaDisciplina.id;
	}	
  }
}
