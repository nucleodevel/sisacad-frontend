import { AbstractDto } from '../../abstract/dto/dto';
import { Endereco } from '../entity/entity';

export class EnderecoDto extends AbstractDto<Endereco> {
  	
  logradouro!: string;	
  numero!: string;
  complemento!: string;
  bairro!: string;
  cep!: string;
  cidade!: number;
  pessoa!: number;

  copyFromEntity(entity: Endereco) {
	this.id = entity.id;
	this.logradouro = entity.logradouro;
	this.numero = entity.numero;
	this.complemento = entity.complemento;
	this.bairro = entity.bairro;
	this.cep = entity.cep;
	
	if (entity.cidade != null) {
	  this.cidade = entity.cidade.id;
	}	
	
	if (entity.pessoa != null) {
	  this.pessoa = entity.pessoa.id;
	}	
  }
}
