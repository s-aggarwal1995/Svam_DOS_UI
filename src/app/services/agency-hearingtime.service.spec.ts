import { TestBed } from '@angular/core/testing';

import { AgencyHearingtimeService } from './agency-hearingtime.service';

describe('AgencyHearingtimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgencyHearingtimeService = TestBed.get(AgencyHearingtimeService);
    expect(service).toBeTruthy();
  });
});
