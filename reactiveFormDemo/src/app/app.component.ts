import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Validators , FormArray } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormDemo';
profileForm=this.fb.group({
  firstName:['',Validators.required],
  lastName:[''],
  address:this.fb.group({
    street:[''],
    city:[''],
    state:[''],
    zip:['']
  }),
  aliases:this.fb.array([this.fb.control('')])
})
  constructor(
    private fb:FormBuilder
    ){}

onSubmit(){
  console.warn(this.profileForm.value)
}
updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
get aliases(){
  return this.profileForm.get('aliases') as FormArray;
}
addAlias(){
this.aliases.push(this.fb.control(''))
}
}
