import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaAddComponent } from './component';

describe('DisciplinaAddComponent', () => {
  let component: DisciplinaAddComponent;
  let fixture: ComponentFixture<DisciplinaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
