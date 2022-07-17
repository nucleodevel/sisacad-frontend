import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularAddComponent } from './component';

describe('VestibularAddComponent', () => {
  let component: VestibularAddComponent;
  let fixture: ComponentFixture<VestibularAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
