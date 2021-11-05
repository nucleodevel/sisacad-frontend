import { AbstractDto } from '../../abstract/dto/dto';
import { Categoria } from '../entity/entity';

export class CategoriaDto extends AbstractDto<Categoria> {
  nome!: string;

  copyFromEntity(entity: Categoria) {
	this.id = entity.id;
	this.nome = entity.nome;
  }
}
