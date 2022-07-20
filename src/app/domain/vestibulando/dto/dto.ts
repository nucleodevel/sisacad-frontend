import { AbstractDto } from '../../abstract/dto/dto';
import { Vestibulando } from '../entity/entity';

export class VestibulandoDto extends AbstractDto<Vestibulando> {
  nome!: string;
  ofertaCurso!: number;

  copyFromEntity(entity: Vestibulando) {
	this.id = entity.id;
	
	this.nome = entity.nome;
	
	if (entity.ofertaCurso != null) {
	  this.ofertaCurso = entity.ofertaCurso.id;
	}	
  }
}
