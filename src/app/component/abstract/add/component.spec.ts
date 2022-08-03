import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractAddComponent } from './component';

describe('AbstractAddComponent', () => {
  let component: AbstractAddComponent;
  let fixture: ComponentFixture<AbstractAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
