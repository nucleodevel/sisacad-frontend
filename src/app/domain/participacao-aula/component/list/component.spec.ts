import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAulaListComponent } from './component';

describe('ParticipacaoAulaListComponent', () => {
  let component: ParticipacaoAulaListComponent;
  let fixture: ComponentFixture<ParticipacaoAulaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAulaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAulaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
