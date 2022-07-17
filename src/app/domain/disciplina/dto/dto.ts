import { AbstractDto } from '../../abstract/dto/dto';
import { Disciplina } from '../entity/entity';

export class DisciplinaDto extends AbstractDto<Disciplina> {
  nome!: string;

  copyFromEntity(entity: Disciplina) {
	this.id = entity.id;
	this.nome = entity.nome;
  }
}
