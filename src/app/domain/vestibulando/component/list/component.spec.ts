import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibulandoListComponent } from './component';

describe('VestibulandoListComponent', () => {
  let component: VestibulandoListComponent;
  let fixture: ComponentFixture<VestibulandoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibulandoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibulandoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
