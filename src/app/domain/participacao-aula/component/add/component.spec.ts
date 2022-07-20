import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAulaAddComponent } from './component';

describe('ParticipacaoAulaAddComponent', () => {
  let component: ParticipacaoAulaAddComponent;
  let fixture: ComponentFixture<ParticipacaoAulaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAulaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAulaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
