import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAvaliacaoEditComponent } from './component';

describe('ParticipacaoAvaliacaoEditComponent', () => {
  let component: ParticipacaoAvaliacaoEditComponent;
  let fixture: ComponentFixture<ParticipacaoAvaliacaoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAvaliacaoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAvaliacaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
