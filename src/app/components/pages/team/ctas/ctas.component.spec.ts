import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtasComponent } from './ctas.component';

describe('CtasComponent', () => {
  let component: CtasComponent;
  let fixture: ComponentFixture<CtasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
