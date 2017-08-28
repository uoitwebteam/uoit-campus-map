import { TestBed, inject } from '@angular/core/testing';

import { InfowindowService } from './infowindow.service';

describe('InfowindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfowindowService]
    });
  });

  it('should be created', inject([InfowindowService], (service: InfowindowService) => {
    expect(service).toBeTruthy();
  }));
});
