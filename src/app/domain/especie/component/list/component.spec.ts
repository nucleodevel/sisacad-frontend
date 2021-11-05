import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieListComponent } from './component';

describe('EspecieListComponent', () => {
  let component: EspecieListComponent;
  let fixture: ComponentFixture<EspecieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
