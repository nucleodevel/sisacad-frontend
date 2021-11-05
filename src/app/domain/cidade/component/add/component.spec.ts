import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeAddComponent } from './component';

describe('CidadeAddComponent', () => {
  let component: CidadeAddComponent;
  let fixture: ComponentFixture<CidadeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
