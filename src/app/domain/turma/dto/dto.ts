import { AbstractDto } from '../../abstract/dto/dto';
import { Turma } from '../entity/entity';

export class TurmaDto extends AbstractDto<Turma> {
  ofertaCurso!: number;

  copyFromEntity(entity: Turma) {
	this.id = entity.id;
	
	if (entity.ofertaCurso != null) {
	  this.ofertaCurso = entity.ofertaCurso.id;
	}	
  }
}
