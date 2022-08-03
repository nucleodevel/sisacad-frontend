import { TestBed } from '@angular/core/testing';

import { ParticipacaoAvaliacaoService } from './service';

describe('ParticipacaoAvaliacaoService', () => {
  let service: ParticipacaoAvaliacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipacaoAvaliacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
