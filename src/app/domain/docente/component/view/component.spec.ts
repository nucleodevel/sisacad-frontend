import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteViewComponent } from './component';

describe('DocenteViewComponent', () => {
  let component: DocenteViewComponent;
  let fixture: ComponentFixture<DocenteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
