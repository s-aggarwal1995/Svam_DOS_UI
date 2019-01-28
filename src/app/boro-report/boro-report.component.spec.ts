import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoroReportComponent } from './boro-report.component';

describe('BoroReportComponent', () => {
  let component: BoroReportComponent;
  let fixture: ComponentFixture<BoroReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoroReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoroReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
