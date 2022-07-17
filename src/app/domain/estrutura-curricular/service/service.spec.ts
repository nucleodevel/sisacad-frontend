import { TestBed } from '@angular/core/testing';

import { EstruturaCurricularService } from './service';

describe('EstruturaCurricularService', () => {
  let service: EstruturaCurricularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstruturaCurricularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
