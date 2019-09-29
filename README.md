# RxForms

## RxFormsValidation

A Simple Angular library service to validate reactive forms inside the component

![Image ng-rxforms-validation](https://github.com/rjankathi/Angular8-reactive-forms-validation/tree/master/projects/ng-rxforms-tester/src/assets/RxFormsValidation.png)

## Purpose

Move validation messages to the component class which helps

- Easily unit test validation logic.
- No hard coding of validation messages in the application like in the example html below.

  ```html
    <div class="form-group"
      [ngClass]="{'has-error': ((employeeForm.get('fullName').touched ||
                                 employeeForm.get('fullName').dirty) &&
                                 employeeForm.get('fullName').errors)}">
    <label class="col-sm-2 control-label" for="fullName">Full Name</label>
    <div class="col-sm-8">
        <input id="fullName" type="text" class="form-control" formControlName="fullName">
        <span class="help-block"
            *ngIf="((employeeForm.get('fullName').touched ||
                    employeeForm.get('fullName').dirty) &&
                    employeeForm.get('fullName').errors)">
        <span *ngIf="employeeForm.get('fullName').errors.required">
            Full Name is required
        </span>
        <span *ngIf="employeeForm.get('fullName').errors.minlength ||
                    employeeForm.get('fullName').errors.maxlength">
            Full Name must be greater than 2 characters and less than 10 characters
        </span>
        </span>
    </div>
    </div>
    ```

- The RxFormsValidation service helps to get rid of all the error messages clutter form all your components `html` files. All the complex logic is moved to the component class
- Change validation dynamically at run time.

## Installation

```npm
npm i ng-rxforms-validation
```

## API

1. Register the `RxFormsValidationModule` in your app module

```javascript

import { RxFormsValidationModule } from 'ng-rxforms-validation'

```

2. Add RxFormsValidationModule to imports array in app.module.ts

```javascript
imports:[RxFormsValidationModule]
```

1. Import RxFormsValidationService from 'ng-rxforms-validation'  library.

```javascript
import { RxFormsValidationService } from 'ng-rxforms-validation';
```

4. Import RxFormsValidationService into the component you like to remove redundant validation messages in side the components html.

   - In our tester app I have imported into the app.component.ts like below
  
  
5. Import RxFormsValidationService in app.component.ts
  
  ```javascript
  import { RxFormsValidationService } from 'ng-rxforms-validation';
  ```

6. Inject RxFormsValidationService  
  
  ```javascript
    constructor(private _validationMessages: RxFormsValidationService){}
  ```

7. for any validation messages on the forms use the `FormGroup` i.e employeeForm in our app. When any of the form control value in employee form changes the function validate() is called which triggers the RxFormsValidationService's showValidationErrors() method. You can do this in ngOnInit()
   
   ```javascript
    this.employeeForm.valueChanges.subscribe(data =>{
      this.validate();
    });
   ```

8. Use the showValidationMessages() method.
 
    ```javascript
     validate(){
    this._validationMessages.showValidationErrors(this.form, this.formErrors,this.validationMessages)
     }
    ```

9.  Parameters to the showValidationErrors() method are described below.
  
| parameter | type | Description |
| --- | --- |--- |
| form | `FormGroup` | Angular FormGroup which extends `AbstractControl` 
| formErrors | `object` | An empty object which holds the error messages of a particular `FormControl` |
| validationMessages | `object` | An object which holds all the validation messages in your application |

10. When a control loses focus, our validation is not triggered. This is because valueChanges observable does not emit an event when the control loses focus. It only emits an event when the value changes. Bind the blur() event and call the validate() method in the app.component.html to the input element which has the `formControlName`
    `(blur)=validate()`.  
  
11.  Use the formErrors object in the app.component.html file with int the `[ngClass]`. The UI will bind to this object to display the validation errors directive as below
    `[ngClass]="{'has-error':formErrors.fullName}"`
  
12.  Our sample application passes the following params to the showValidationMessages()

 - ```javascript
        formErrors= {};
      ```

- ```javascript
        validationMessages = {
            'fullName' :{
            'required' : 'Full Name is required.',
            'minlength' : 'Full Name must be greater than 2 characters.',
            'maxlength': 'Full Name must be less than 10 characters'
            },
            'email' :{
            'required': 'Email is required.',
            'emailDomain':'Email domain should be sora.com'
            },
            'confirmEmail' :{
            'required': 'Confirm Email is required.',
            'emailDomain':'Confirm Email domain should be sora.com'
            },
            'emailGroup':{
            'emailMismatch':'Email and Confirm Email do not match'
            },
            'phone' :{
            'required': 'Phone is required.'
            }
        };

    ```

---
**NOTE**

RxFormsValidation library depends on ReactiveFormsModule( Of course angular needs it to work with Reactive Forms right ;) )

---
