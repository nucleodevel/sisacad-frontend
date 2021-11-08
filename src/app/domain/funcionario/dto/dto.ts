import { AbstractDto } from '../../abstract/dto/dto';
import { Funcionario } from '../entity/entity';

export class FuncionarioDto extends AbstractDto<Funcionario> {
  funcao!: string;
  pessoa!: number;

  copyFromEntity(entity: Funcionario) {
	this.id = entity.id;
	this.funcao = entity.funcao.toString();
	if (entity.pessoa != null) {
	  this.pessoa = entity.pessoa.id;
	}	
  }
}
