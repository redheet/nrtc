import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeV4Component } from './home-v4.component';

describe('HomeV4Component', () => {
  let component: HomeV4Component;
  let fixture: ComponentFixture<HomeV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
