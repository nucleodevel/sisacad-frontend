import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaListComponent } from './component';

describe('RacaListComponent', () => {
  let component: RacaListComponent;
  let fixture: ComponentFixture<RacaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
