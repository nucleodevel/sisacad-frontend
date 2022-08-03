import { AbstractDto } from '../abstract/dto';
import { Vestibular } from '../../domain/vestibular/entity';

export class VestibularDto extends AbstractDto<Vestibular> {
	ano!: string;

	copyFromEntity(entity: Vestibular) {
		this.id = entity.id;
		this.ano = entity.ano;
	}
}
