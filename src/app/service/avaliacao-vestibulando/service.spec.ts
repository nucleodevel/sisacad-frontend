import { TestBed } from '@angular/core/testing';

import { AvaliacaoVestibulandoService } from './service';

describe('AvaliacaoVestibulandoService', () => {
  let service: AvaliacaoVestibulandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoVestibulandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
