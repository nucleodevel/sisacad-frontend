import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoAddComponent } from './component';

describe('EstadoAddComponent', () => {
  let component: EstadoAddComponent;
  let fixture: ComponentFixture<EstadoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
