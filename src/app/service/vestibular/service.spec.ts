import { TestBed } from '@angular/core/testing';

import { VestibularService } from './service';

describe('VestibularService', () => {
  let service: VestibularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VestibularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
