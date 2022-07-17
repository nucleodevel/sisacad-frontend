import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaViewComponent } from './component';

describe('TurmaViewComponent', () => {
  let component: TurmaViewComponent;
  let fixture: ComponentFixture<TurmaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
