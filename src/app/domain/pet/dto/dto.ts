import { AbstractDto } from '../../abstract/dto/dto';
import { Pet } from '../entity/entity';

export class PetDto extends AbstractDto<Pet> {
  	
  idade!: number;	
  nome!: string;
  especie!: number;
  raca!: number;

  copyFromEntity(entity: Pet) {
	this.id = entity.id;
	this.idade = entity.idade;
	this.nome = entity.nome;
	
	if (entity.especie != null) {
	  this.especie = entity.especie.id;
	}	
	
	if (entity.raca != null) {
	  this.raca = entity.raca.id;
	}	
  }
}
