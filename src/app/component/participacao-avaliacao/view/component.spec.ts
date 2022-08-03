import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAvaliacaoViewComponent } from './component';

describe('ParticipacaoAvaliacaoViewComponent', () => {
  let component: ParticipacaoAvaliacaoViewComponent;
  let fixture: ComponentFixture<ParticipacaoAvaliacaoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAvaliacaoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAvaliacaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
