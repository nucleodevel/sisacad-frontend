import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCursoViewComponent } from './component';

describe('OfertaCursoViewComponent', () => {
  let component: OfertaCursoViewComponent;
  let fixture: ComponentFixture<OfertaCursoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaCursoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCursoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
