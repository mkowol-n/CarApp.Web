import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import {AuthRoutingModule} from "./auth-routing-module";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ],
  exports: [

    LoginComponent,
    SignupComponent,
  ]
})
export class AuthModule { }
