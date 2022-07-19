import { TestBed } from '@angular/core/testing';

import { OfertaDisciplinaService } from './service';

describe('OfertaDisciplinaService', () => {
  let service: OfertaDisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaDisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
