import { TestBed } from '@angular/core/testing';

import { OfertaCursoService } from './service';

describe('OfertaCursoService', () => {
  let service: OfertaCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
