import { TestBed, inject } from '@angular/core/testing';

import { NgxTwitterTimeLineService } from './ngx-twitter-time-line.service';

describe('NgxTwitterTimeLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTwitterTimeLineService]
    });
  });

  it('should be created', inject([NgxTwitterTimeLineService], (service: NgxTwitterTimeLineService) => {
    expect(service).toBeTruthy();
  }));
});
