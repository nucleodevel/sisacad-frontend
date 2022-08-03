import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoVestibulandoEditComponent } from './component';

describe('AvaliacaoVestibulandoEditComponent', () => {
  let component: AvaliacaoVestibulandoEditComponent;
  let fixture: ComponentFixture<AvaliacaoVestibulandoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoVestibulandoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoVestibulandoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
