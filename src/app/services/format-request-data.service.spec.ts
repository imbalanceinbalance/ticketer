import { TestBed, inject } from '@angular/core/testing';

import { FormatRequestDataService } from './format-request-data.service';

describe('FormatRequestDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatRequestDataService]
    });
  });

  it('should be created', inject([FormatRequestDataService], (service: FormatRequestDataService) => {
    expect(service).toBeTruthy();
  }));
});
