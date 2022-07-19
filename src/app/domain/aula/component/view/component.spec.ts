import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaViewComponent } from './component';

describe('AulaViewComponent', () => {
  let component: AulaViewComponent;
  let fixture: ComponentFixture<AulaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
