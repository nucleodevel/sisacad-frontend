import { TestBed } from '@angular/core/testing';

import { ParticipacaoAulaService } from './service';

describe('ParticipacaoAulaService', () => {
  let service: ParticipacaoAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipacaoAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
