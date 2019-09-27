import { TestBed } from '@angular/core/testing';

import { RxFormsValidationService } from './rxforms-validation-errors.service';

describe('RxFormsValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxFormsValidationService = TestBed.get(RxFormsValidationService);
    expect(service).toBeTruthy();
  });
});
