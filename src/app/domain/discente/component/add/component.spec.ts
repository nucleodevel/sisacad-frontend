import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscenteAddComponent } from './component';

describe('DiscenteAddComponent', () => {
  let component: DiscenteAddComponent;
  let fixture: ComponentFixture<DiscenteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscenteAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscenteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
