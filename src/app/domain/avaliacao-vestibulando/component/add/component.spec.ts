import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoVestibulandoAddComponent } from './component';

describe('AvaliacaoVestibulandoAddComponent', () => {
  let component: AvaliacaoVestibulandoAddComponent;
  let fixture: ComponentFixture<AvaliacaoVestibulandoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoVestibulandoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoVestibulandoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
