import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAvaliacaoAddComponent } from './component';

describe('ParticipacaoAvaliacaoAddComponent', () => {
  let component: ParticipacaoAvaliacaoAddComponent;
  let fixture: ComponentFixture<ParticipacaoAvaliacaoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAvaliacaoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAvaliacaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
