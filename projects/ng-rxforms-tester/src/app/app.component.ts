import { Component,OnInit } from '@angular/core';
import { RxFormsValidationService } from 'dist/ng-rxforms-validation';
import {FormControl,FormArray,FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive Forms Validation Tester';
  employeeForm : FormGroup;
  formErrors= {};
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
  constructor(private fb:FormBuilder,private _validationErrors:RxFormsValidationService){

  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employeeForm = this.fb.group({
      fullName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      contactPreference:['email'],
      emailGroup: this.fb.group({
        email: ['',Validators.required],
        confirmEmail:['',Validators.required],
      }),
      phone:[''],
      skills: this.fb.array([
        this.addSkillFormGroup()
      ])
    });

    this.employeeForm.valueChanges.subscribe(data =>{
      this.validate();
    });
  }

  addSkillFormGroup() : FormGroup{
    return this.fb.group({
      skillName : ['',Validators.required],
      experienceInYears: ['',Validators.required],
      proficiency :['',Validators.required]
   })
  }

  validate(){
    this._validationErrors.showValidationMessages(this.employeeForm, this.formErrors,this.validationMessages)
  }

}
