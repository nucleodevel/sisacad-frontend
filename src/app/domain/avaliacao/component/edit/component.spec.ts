import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoEditComponent } from './component';

describe('AvaliacaoEditComponent', () => {
  let component: AvaliacaoEditComponent;
  let fixture: ComponentFixture<AvaliacaoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
