import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieEditComponent } from './component';

describe('EspecieEditComponent', () => {
  let component: EspecieEditComponent;
  let fixture: ComponentFixture<EspecieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
