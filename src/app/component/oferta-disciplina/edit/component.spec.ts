import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDisciplinaEditComponent } from './component';

describe('OfertaDisciplinaEditComponent', () => {
  let component: OfertaDisciplinaEditComponent;
  let fixture: ComponentFixture<OfertaDisciplinaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaDisciplinaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDisciplinaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
