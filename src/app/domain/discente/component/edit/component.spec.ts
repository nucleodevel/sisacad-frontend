import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscenteEditComponent } from './component';

describe('DiscenteEditComponent', () => {
  let component: DiscenteEditComponent;
  let fixture: ComponentFixture<DiscenteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscenteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscenteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
