import { AbstractDto } from '../../abstract/dto/dto';
import { Produto } from '../entity/entity';

export class ProdutoDto extends AbstractDto<Produto> {
  nome!: string;
  preco!: number;

  copyFromEntity(entity: Produto) {
	this.id = entity.id;
	this.nome = entity.nome;
	this.preco = entity.preco;
  }
}
