import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieViewComponent } from './component';

describe('EspecieViewComponent', () => {
  let component: EspecieViewComponent;
  let fixture: ComponentFixture<EspecieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
