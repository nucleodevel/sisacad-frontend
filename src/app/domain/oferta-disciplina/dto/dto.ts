import { AbstractDto } from '../../abstract/dto/dto';
import { OfertaDisciplina } from '../entity/entity';

export class OfertaDisciplinaDto extends AbstractDto<OfertaDisciplina> {
  disciplina!: number;
  docente!: number;

  copyFromEntity(entity: OfertaDisciplina) {
	this.id = entity.id;
	
	if (entity.disciplina != null) {
	  this.disciplina = entity.disciplina.id;
	}	
	
	if (entity.docente != null) {
	  this.docente = entity.docente.id;
	}	
  }
}
