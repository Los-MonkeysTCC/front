import { LoginModel } from './../components/template/header/models/Login.Model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  

  constructor( private formBuilder : FormBuilder,
    private router: Router){}
  
    ngOnInit(): void {
       this.loginForm= this.formBuilder.group(
        {
          email: ['',[Validators.required, Validators.email]],
          semha: ['',[Validators.required]],
        }
       );
    
  }
  submitLogin()
  {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
  }

}
