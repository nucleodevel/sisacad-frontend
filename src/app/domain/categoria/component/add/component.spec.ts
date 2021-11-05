import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAddComponent } from './component';

describe('CategoriaAddComponent', () => {
  let component: CategoriaAddComponent;
  let fixture: ComponentFixture<CategoriaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
