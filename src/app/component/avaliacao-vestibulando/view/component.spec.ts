import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoVestibulandoViewComponent } from './component';

describe('AvaliacaoVestibulandoViewComponent', () => {
  let component: AvaliacaoVestibulandoViewComponent;
  let fixture: ComponentFixture<AvaliacaoVestibulandoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoVestibulandoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoVestibulandoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
