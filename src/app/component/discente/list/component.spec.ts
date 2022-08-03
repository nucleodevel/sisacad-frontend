import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscenteListComponent } from './component';

describe('DiscenteListComponent', () => {
  let component: DiscenteListComponent;
  let fixture: ComponentFixture<DiscenteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscenteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
