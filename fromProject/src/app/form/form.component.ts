import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  firstname: any;
  password: any;
  email: any;

  constructor() { }

  ngOnInit() {
  }

  Register(regForm:any){
    this.firstname=regForm.controls.firstname.value;
    this.password=regForm.controls.password.value;
    this.email=regForm.controls.email.value;
    console.log(this.firstname);
    console.log(this.password);
    console.log(this.email)
 console.log("regForm data",regForm)

  }

}
