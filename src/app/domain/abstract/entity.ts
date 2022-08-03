export abstract class AbstractEntity {
  id!: number;

  abstract toString(): string;

  compare(other: AbstractEntity) {
	return this && other ? this.id === other.id: this == other;
  }
}
