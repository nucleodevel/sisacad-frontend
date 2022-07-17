import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCursoListComponent } from './component';

describe('OfertaCursoListComponent', () => {
  let component: OfertaCursoListComponent;
  let fixture: ComponentFixture<OfertaCursoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaCursoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCursoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
