import { TestBed } from '@angular/core/testing';

import { RxFormsValidationErrorsService } from './rxforms-validation-errors.service';

describe('RxFormsValidationErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxFormsValidationErrorsService = TestBed.get(RxFormsValidationErrorsService);
    expect(service).toBeTruthy();
  });
});
