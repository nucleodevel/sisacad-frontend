import { PetDto } from './dto';

describe('Pet', () => {
  it('should create an instance', () => {
    expect(new PetDto()).toBeTruthy();
  });
});
