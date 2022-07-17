import { AbstractDto } from '../../abstract/dto/dto';
import { Vestibular } from '../entity/entity';

export class VestibularDto extends AbstractDto<Vestibular> {
  ano!: string;

  copyFromEntity(entity: Vestibular) {
	this.id = entity.id;
	this.ano = entity.ano;
  }
}
