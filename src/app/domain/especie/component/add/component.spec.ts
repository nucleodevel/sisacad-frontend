import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieAddComponent } from './component';

describe('EspecieAddComponent', () => {
  let component: EspecieAddComponent;
  let fixture: ComponentFixture<EspecieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
