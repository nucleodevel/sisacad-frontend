import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDisciplinaViewComponent } from './component';

describe('OfertaDisciplinaViewComponent', () => {
  let component: OfertaDisciplinaViewComponent;
  let fixture: ComponentFixture<OfertaDisciplinaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaDisciplinaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDisciplinaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
