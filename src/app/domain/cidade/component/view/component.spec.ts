import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeViewComponent } from './component';

describe('CidadeViewComponent', () => {
  let component: CidadeViewComponent;
  let fixture: ComponentFixture<CidadeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
