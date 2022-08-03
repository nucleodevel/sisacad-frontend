import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoAulaViewComponent } from './component';

describe('ParticipacaoAulaViewComponent', () => {
  let component: ParticipacaoAulaViewComponent;
  let fixture: ComponentFixture<ParticipacaoAulaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacaoAulaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoAulaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
