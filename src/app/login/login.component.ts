import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  LoginDetails } from '../login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 model: any = {
 };
    loading = false;
    returnUrl: string;

name: string;
password: string;

loginDetais: LoginDetails;

 constructor(
  private router: Router
  ){}
   login() {
        this.loading = true;
        // debugger;
        // if(this.name=="kkk" && this.password=="kkk"){
        this.router.navigateByUrl('/home');
      // }
      // else{
      //   alert("Please Enter Valid Username and Password");
      //   this.name ="";
      //   this.password ="";

      // }
    }

}
