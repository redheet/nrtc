import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestserviceComponent } from './latestservice.component';

describe('LatestserviceComponent', () => {
  let component: LatestserviceComponent;
  let fixture: ComponentFixture<LatestserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
