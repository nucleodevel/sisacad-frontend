import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoViewComponent } from './component';

describe('ProdutoViewComponent', () => {
  let component: ProdutoViewComponent;
  let fixture: ComponentFixture<ProdutoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
