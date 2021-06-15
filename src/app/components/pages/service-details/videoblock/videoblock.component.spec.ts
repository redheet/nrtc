import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoblockComponent } from './videoblock.component';

describe('VideoblockComponent', () => {
  let component: VideoblockComponent;
  let fixture: ComponentFixture<VideoblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
