import { TestBed } from '@angular/core/testing';

import { VestibulandoService } from './service';

describe('VestibulandoService', () => {
  let service: VestibulandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VestibulandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
