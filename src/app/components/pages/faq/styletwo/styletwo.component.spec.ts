import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyletwoComponent } from './styletwo.component';

describe('StyletwoComponent', () => {
  let component: StyletwoComponent;
  let fixture: ComponentFixture<StyletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyletwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
