import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanmittraphapTwoComponent } from './lanmittraphap-two.component';

describe('LanmittraphapTwoComponent', () => {
  let component: LanmittraphapTwoComponent;
  let fixture: ComponentFixture<LanmittraphapTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanmittraphapTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanmittraphapTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
