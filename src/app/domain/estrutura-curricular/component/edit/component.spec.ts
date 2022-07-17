import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaCurricularEditComponent } from './component';

describe('EstruturaCurricularEditComponent', () => {
  let component: EstruturaCurricularEditComponent;
  let fixture: ComponentFixture<EstruturaCurricularEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaCurricularEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaCurricularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
