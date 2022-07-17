import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaCurricularAddComponent } from './component';

describe('EstruturaCurricularAddComponent', () => {
  let component: EstruturaCurricularAddComponent;
  let fixture: ComponentFixture<EstruturaCurricularAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaCurricularAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaCurricularAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
