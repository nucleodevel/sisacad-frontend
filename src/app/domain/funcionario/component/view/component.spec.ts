import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioViewComponent } from './component';

describe('FuncionarioViewComponent', () => {
  let component: FuncionarioViewComponent;
  let fixture: ComponentFixture<FuncionarioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
