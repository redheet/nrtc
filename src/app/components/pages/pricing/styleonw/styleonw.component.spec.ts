import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleonwComponent } from './styleonw.component';

describe('StyleonwComponent', () => {
  let component: StyleonwComponent;
  let fixture: ComponentFixture<StyleonwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleonwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleonwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
