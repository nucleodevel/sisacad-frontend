import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoListComponent } from './component';

describe('AvaliacaoListComponent', () => {
  let component: AvaliacaoListComponent;
  let fixture: ComponentFixture<AvaliacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
