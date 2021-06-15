import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceblockComponent } from './serviceblock.component';

describe('ServiceblockComponent', () => {
  let component: ServiceblockComponent;
  let fixture: ComponentFixture<ServiceblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
