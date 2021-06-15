import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseblockComponent } from './caseblock.component';

describe('CaseblockComponent', () => {
  let component: CaseblockComponent;
  let fixture: ComponentFixture<CaseblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
