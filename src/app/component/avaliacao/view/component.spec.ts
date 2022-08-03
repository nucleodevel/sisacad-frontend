import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoViewComponent } from './component';

describe('AvaliacaoViewComponent', () => {
  let component: AvaliacaoViewComponent;
  let fixture: ComponentFixture<AvaliacaoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
