import { Injectable } from '@angular/core';
import { FormGroup,AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RxFormsValidationService {

  constructor() { }

  showValidationMessages(group: FormGroup,formErrors:{},validationMessages:{}): void{
    Object.keys(group.controls).forEach((key:string)=>{
      const abstractControl = group.get(key);
        formErrors[key] = '';
        if(abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')){
          const messages = validationMessages[key];

          for (const errorKey in abstractControl.errors){
            if(errorKey){
              formErrors[key] += messages[errorKey] + ' ';
            }
          }
      }

      if(abstractControl instanceof FormGroup){
        this.showValidationMessages(abstractControl,formErrors,validationMessages);
      } 
  });  
}
}

