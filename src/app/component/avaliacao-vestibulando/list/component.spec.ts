import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoVestibulandoListComponent } from './component';

describe('AvaliacaoVestibulandoListComponent', () => {
  let component: AvaliacaoVestibulandoListComponent;
  let fixture: ComponentFixture<AvaliacaoVestibulandoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoVestibulandoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoVestibulandoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
