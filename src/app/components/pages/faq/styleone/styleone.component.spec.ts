import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleoneComponent } from './styleone.component';

describe('StyleoneComponent', () => {
  let component: StyleoneComponent;
  let fixture: ComponentFixture<StyleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
