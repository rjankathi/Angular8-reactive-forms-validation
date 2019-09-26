import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogValidationErrorsLibComponent } from './log-validation-errors-lib.component';

describe('LogValidationErrorsLibComponent', () => {
  let component: LogValidationErrorsLibComponent;
  let fixture: ComponentFixture<LogValidationErrorsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogValidationErrorsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogValidationErrorsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
