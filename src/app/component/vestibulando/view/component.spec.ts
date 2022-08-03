import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibulandoViewComponent } from './component';

describe('VestibulandoViewComponent', () => {
  let component: VestibulandoViewComponent;
  let fixture: ComponentFixture<VestibulandoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibulandoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibulandoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
