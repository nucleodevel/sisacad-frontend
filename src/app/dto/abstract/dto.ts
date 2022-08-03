import { AbstractEntity } from '../../domain/abstract/entity';

export abstract class AbstractDto<E extends AbstractEntity> {
	id!: number;

	abstract copyFromEntity(entity: E): void;
}
