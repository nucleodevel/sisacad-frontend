import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaCurricularViewComponent } from './component';

describe('EstruturaCurricularViewComponent', () => {
  let component: EstruturaCurricularViewComponent;
  let fixture: ComponentFixture<EstruturaCurricularViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaCurricularViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaCurricularViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
