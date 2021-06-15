import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrovideoComponent } from './introvideo.component';

describe('IntrovideoComponent', () => {
  let component: IntrovideoComponent;
  let fixture: ComponentFixture<IntrovideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrovideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrovideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
