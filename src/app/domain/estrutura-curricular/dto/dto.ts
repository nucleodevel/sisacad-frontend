import { AbstractDto } from '../../abstract/dto/dto';
import { EstruturaCurricular } from '../entity/entity';

export class EstruturaCurricularDto extends AbstractDto<EstruturaCurricular> {
  anoInicio!: number;
  anoTermino!: number;
  curso!: number;

  copyFromEntity(entity: EstruturaCurricular) {
	this.id = entity.id;
	this.anoInicio = entity.anoInicio;
	this.anoTermino = entity.anoTermino;
	if (entity.curso != null) {
	  this.curso = entity.curso.id;
	}	
  }
}
