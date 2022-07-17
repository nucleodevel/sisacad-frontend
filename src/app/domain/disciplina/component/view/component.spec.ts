import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaViewComponent } from './component';

describe('DisciplinaViewComponent', () => {
  let component: DisciplinaViewComponent;
  let fixture: ComponentFixture<DisciplinaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
