import { AbstractDto } from '../../abstract/dto/dto';
import { Pessoa } from '../entity/entity';

export class PessoaDto extends AbstractDto<Pessoa> {
  nome!: string;
  email!: string;
  codNacional!: number;

  copyFromEntity(entity: Pessoa) {
	this.id = entity.id;
	this.nome = entity.nome;
	this.email = entity.email;
	this.codNacional = entity.codNacional;
  }
}
