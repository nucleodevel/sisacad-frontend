import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaAddComponent } from './component';

describe('RacaAddComponent', () => {
  let component: RacaAddComponent;
  let fixture: ComponentFixture<RacaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
