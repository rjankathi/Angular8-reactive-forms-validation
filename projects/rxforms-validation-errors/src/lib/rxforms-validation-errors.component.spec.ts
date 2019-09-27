import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxValidationErrorsComponent } from './rxforms-validation-errors.component';

describe('RxValidationErrorsComponent', () => {
  let component: RxValidationErrorsComponent;
  let fixture: ComponentFixture<RxValidationErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxValidationErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
