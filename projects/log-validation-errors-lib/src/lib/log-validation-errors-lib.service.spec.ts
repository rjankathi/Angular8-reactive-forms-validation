import { TestBed } from '@angular/core/testing';

import { LogValidationErrorsLibService } from './log-validation-errors-lib.service';

describe('LogValidationErrorsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogValidationErrorsLibService = TestBed.get(LogValidationErrorsLibService);
    expect(service).toBeTruthy();
  });
});
