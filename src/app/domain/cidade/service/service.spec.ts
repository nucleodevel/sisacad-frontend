import { TestBed } from '@angular/core/testing';

import { CidadeService } from './service';

describe('CidadeService', () => {
  let service: CidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
