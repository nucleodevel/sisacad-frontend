import { AbstractDto } from '../../abstract/dto/dto';
import { ParticipacaoAula } from '../entity/entity';

export class ParticipacaoAulaDto extends AbstractDto<ParticipacaoAula> {
  aula!: number;
  discente!: number;

  copyFromEntity(entity: ParticipacaoAula) {
	this.id = entity.id;
	
	if (entity.aula != null) {
	  this.aula = entity.aula.id;
	}	
	
	if (entity.discente != null) {
	  this.discente = entity.discente.id;
	}	
  }
}
