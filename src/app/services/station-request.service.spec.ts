import { TestBed, inject } from '@angular/core/testing';

import { StationRequestService } from './station-request.service';

describe('StationRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationRequestService]
    });
  });

  it('should be created', inject([StationRequestService], (service: StationRequestService) => {
    expect(service).toBeTruthy();
  }));
});
