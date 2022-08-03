import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibulandoEditComponent } from './component';

describe('VestibulandoEditComponent', () => {
  let component: VestibulandoEditComponent;
  let fixture: ComponentFixture<VestibulandoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibulandoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibulandoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
