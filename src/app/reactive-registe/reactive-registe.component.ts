import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl,AbstractControl,Validators } from '@angular/forms';





@Component({
  selector: 'app-reactive-registe',
  templateUrl: './reactive-registe.component.html',
  styleUrls: ['./reactive-registe.component.css']
})
export class ReactiveRegisteComponent implements OnInit {

  mobileValidator(control:FormControl):any{
    // var myreg = /^(((13[0-9]{1})|(15[0-9]){1})|(18[0-9]{1}))+\d{8})$/;
    var myreg=/^1(3[0-9]|4[579]|5[0-35-9]|7[0-9]|8[0-9])\\d{8}$/;
    let vaild=myreg.test(control.value);
    console.log(vaild);
    return vaild ? null:{mobile:true};
  }



  formModel:FormGroup

  constructor(fb:FormBuilder) {
    this.formModel=fb.group({
      username:['',[Validators.required]],
      mobile: ['',this.mobileValidator],
      passwordsGroup:fb.group({
        password: [''],
        pconfirm: ['']
      })
    })
  }
  onsubmit(){
    console.log(this.formModel.value);
  }

  ngOnInit() {

  }

}
