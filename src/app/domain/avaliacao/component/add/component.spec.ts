import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoAddComponent } from './component';

describe('AvaliacaoAddComponent', () => {
  let component: AvaliacaoAddComponent;
  let fixture: ComponentFixture<AvaliacaoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
