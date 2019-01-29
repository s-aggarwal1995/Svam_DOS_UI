import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingTimeComponent } from './hearing-time.component';

describe('HearingTimeComponent', () => {
  let component: HearingTimeComponent;
  let fixture: ComponentFixture<HearingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
