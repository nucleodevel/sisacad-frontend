import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscenteViewComponent } from './component';

describe('DiscenteViewComponent', () => {
  let component: DiscenteViewComponent;
  let fixture: ComponentFixture<DiscenteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscenteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscenteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
