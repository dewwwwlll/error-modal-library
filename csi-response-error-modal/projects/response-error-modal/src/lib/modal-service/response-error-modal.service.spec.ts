import { TestBed } from '@angular/core/testing';

import { ResponseErrorModalService } from './response-error-modal.service';

describe('ResponseErrorModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseErrorModalService = TestBed.get(ResponseErrorModalService);
    expect(service).toBeTruthy();
  });
});
