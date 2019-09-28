import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxValidationComponent } from './ng-rxforms-validation.component';

describe('RxValidationComponent', () => {
  let component: RxValidationComponent;
  let fixture: ComponentFixture<RxValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
