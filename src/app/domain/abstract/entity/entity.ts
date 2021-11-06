export abstract class AbstractEntity {
  id!: number;

  compare(other: AbstractEntity) {
	return this && other ? this.id === other.id: this == other;
  }
}
