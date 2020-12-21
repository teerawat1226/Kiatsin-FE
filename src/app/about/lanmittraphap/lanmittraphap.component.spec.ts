import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanmittraphapComponent } from './lanmittraphap.component';

describe('LanmittraphapComponent', () => {
  let component: LanmittraphapComponent;
  let fixture: ComponentFixture<LanmittraphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanmittraphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanmittraphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
