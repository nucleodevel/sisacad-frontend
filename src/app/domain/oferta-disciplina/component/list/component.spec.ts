import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDisciplinaListComponent } from './component';

describe('OfertaDisciplinaListComponent', () => {
  let component: OfertaDisciplinaListComponent;
  let fixture: ComponentFixture<OfertaDisciplinaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaDisciplinaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDisciplinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
