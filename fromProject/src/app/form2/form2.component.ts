import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
        
  signUpform:FormGroup;
  firstname:string='';
  lastname:string='';
  email:string='';
  password:string='';
  constructor( private frmBulider:FormBuilder) {

    this.signUpform=frmBulider.group({
  fname:new FormControl(),
  lname:new FormControl(),
  Emailid:new FormControl(),
  password:new FormControl(),
    })
   }

  ngOnInit() {
  }

  postData(signupForm:NgForm){
  console.log("this is signup",signupForm.controls)
  }


}



