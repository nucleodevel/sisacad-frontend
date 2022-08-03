import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaCurricularListComponent } from './component';

describe('EstruturaCurricularListComponent', () => {
  let component: EstruturaCurricularListComponent;
  let fixture: ComponentFixture<EstruturaCurricularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaCurricularListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaCurricularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
