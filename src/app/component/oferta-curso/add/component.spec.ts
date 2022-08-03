import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCursoAddComponent } from './component';

describe('OfertaCursoAddComponent', () => {
  let component: OfertaCursoAddComponent;
  let fixture: ComponentFixture<OfertaCursoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaCursoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCursoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
