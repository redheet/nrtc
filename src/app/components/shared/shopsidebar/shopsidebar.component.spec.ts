import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsidebarComponent } from './shopsidebar.component';

describe('ShopsidebarComponent', () => {
  let component: ShopsidebarComponent;
  let fixture: ComponentFixture<ShopsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
