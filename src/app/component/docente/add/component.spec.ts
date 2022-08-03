import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteAddComponent } from './component';

describe('DocenteAddComponent', () => {
  let component: DocenteAddComponent;
  let fixture: ComponentFixture<DocenteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
