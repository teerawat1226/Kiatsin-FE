import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiatsinNextComponent } from './kiatsin-next.component';

describe('KiatsinNextComponent', () => {
  let component: KiatsinNextComponent;
  let fixture: ComponentFixture<KiatsinNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiatsinNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiatsinNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
