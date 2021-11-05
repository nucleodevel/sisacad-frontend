import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAddComponent } from './component';

describe('ProdutoAddComponent', () => {
  let component: ProdutoAddComponent;
  let fixture: ComponentFixture<ProdutoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
