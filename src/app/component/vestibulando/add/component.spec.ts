import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibulandoAddComponent } from './component';

describe('VestibulandoAddComponent', () => {
  let component: VestibulandoAddComponent;
  let fixture: ComponentFixture<VestibulandoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibulandoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibulandoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
