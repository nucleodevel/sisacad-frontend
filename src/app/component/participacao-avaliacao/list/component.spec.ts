import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAvaliacaoListComponent } from './component';

describe('ParticipacaoAvaliacaoListComponent', () => {
  let component: ParticipacaoAvaliacaoListComponent;
  let fixture: ComponentFixture<ParticipacaoAvaliacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAvaliacaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAvaliacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
