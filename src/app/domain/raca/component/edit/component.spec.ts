import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaEditComponent } from './component';

describe('RacaEditComponent', () => {
  let component: RacaEditComponent;
  let fixture: ComponentFixture<RacaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
