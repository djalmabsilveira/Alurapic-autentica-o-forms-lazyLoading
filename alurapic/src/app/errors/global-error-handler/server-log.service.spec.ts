import { TestBed, inject } from '@angular/core/testing';

import { ServerLogService } from './server-log.service';

describe('ServerLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerLogService]
    });
  });

  it('should be created', inject([ServerLogService], (service: ServerLogService) => {
    expect(service).toBeTruthy();
  }));
});
