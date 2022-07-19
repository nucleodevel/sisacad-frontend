import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDisciplinaAddComponent } from './component';

describe('OfertaDisciplinaAddComponent', () => {
  let component: OfertaDisciplinaAddComponent;
  let fixture: ComponentFixture<OfertaDisciplinaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaDisciplinaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDisciplinaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
