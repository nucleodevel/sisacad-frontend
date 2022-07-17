import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularViewComponent } from './component';

describe('VestibularViewComponent', () => {
  let component: VestibularViewComponent;
  let fixture: ComponentFixture<VestibularViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
