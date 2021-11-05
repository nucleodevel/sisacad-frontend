import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaViewComponent } from './component';

describe('RacaViewComponent', () => {
  let component: RacaViewComponent;
  let fixture: ComponentFixture<RacaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
