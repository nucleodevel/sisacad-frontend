import { AbstractEntity } from '../entity/entity';

export abstract class AbstractDto<E extends AbstractEntity> {
  id!: number;

  abstract copyFromEntity(entity: E): void;
}
