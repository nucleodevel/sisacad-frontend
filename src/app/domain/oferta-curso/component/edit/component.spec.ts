import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCursoEditComponent } from './component';

describe('OfertaCursoEditComponent', () => {
  let component: OfertaCursoEditComponent;
  let fixture: ComponentFixture<OfertaCursoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaCursoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCursoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
