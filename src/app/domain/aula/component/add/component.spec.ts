import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaAddComponent } from './component';

describe('AulaAddComponent', () => {
  let component: AulaAddComponent;
  let fixture: ComponentFixture<AulaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
