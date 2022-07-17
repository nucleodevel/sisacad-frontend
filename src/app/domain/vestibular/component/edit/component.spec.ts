import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularEditComponent } from './component';

describe('VestibularEditComponent', () => {
  let component: VestibularEditComponent;
  let fixture: ComponentFixture<VestibularEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
