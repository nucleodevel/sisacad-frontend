import { AbstractDto } from '../../abstract/dto/dto';
import { Produto } from '../entity/entity';

export class ProdutoDto extends AbstractDto<Produto> {
  nome!: string;
  preco!: number;

  categorias!: number[];

  copyFromEntity(entity: Produto) {
	this.id = entity.id;
	this.nome = entity.nome;
	this.preco = entity.preco;
	
	if (entity.categorias != null) {
	  this.categorias = [];
	  entity.categorias.forEach((item) => {
		this.categorias.push(item.id);
	  });	
    }
  }
}
