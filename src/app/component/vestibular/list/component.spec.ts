import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularListComponent } from './component';

describe('VestibularListComponent', () => {
  let component: VestibularListComponent;
  let fixture: ComponentFixture<VestibularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
