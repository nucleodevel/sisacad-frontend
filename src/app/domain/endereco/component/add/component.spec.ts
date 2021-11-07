import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoAddComponent } from './component';

describe('EnderecoAddComponent', () => {
  let component: EnderecoAddComponent;
  let fixture: ComponentFixture<EnderecoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
