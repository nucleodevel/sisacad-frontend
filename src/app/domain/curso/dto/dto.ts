import { AbstractDto } from '../../abstract/dto/dto';
import { Curso } from '../entity/entity';

export class CursoDto extends AbstractDto<Curso> {
  nome!: string;

  copyFromEntity(entity: Curso) {
	this.id = entity.id;
	this.nome = entity.nome;
  }
}
