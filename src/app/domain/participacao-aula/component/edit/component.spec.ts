import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAulaEditComponent } from './component';

describe('ParticipacaoAulaEditComponent', () => {
  let component: ParticipacaoAulaEditComponent;
  let fixture: ComponentFixture<ParticipacaoAulaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAulaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAulaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
