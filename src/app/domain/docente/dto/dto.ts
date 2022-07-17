import { AbstractDto } from '../../abstract/dto/dto';
import { Docente } from '../entity/entity';

export class DocenteDto extends AbstractDto<Docente> {
  nome!: string;

  copyFromEntity(entity: Docente) {
	this.id = entity.id;
	this.nome = entity.nome;
  }
}
