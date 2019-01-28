import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDailysetupComponent } from './manage-dailysetup.component';

describe('ManageDailysetupComponent', () => {
  let component: ManageDailysetupComponent;
  let fixture: ComponentFixture<ManageDailysetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDailysetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDailysetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
