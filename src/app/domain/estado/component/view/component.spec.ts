import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoViewComponent } from './component';

describe('EstadoViewComponent', () => {
  let component: EstadoViewComponent;
  let fixture: ComponentFixture<EstadoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
