import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaAddComponent } from './component';

describe('TurmaAddComponent', () => {
  let component: TurmaAddComponent;
  let fixture: ComponentFixture<TurmaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
