import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service'
import { SignInData } from '../model/signinData';

@Component({
  selector: "login",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  formCompleted = false;
  credentialsInvalid = false;

hide = true;
constructor(private authenticationService: AuthenticationService) {}

ngOnInit(): void{

}

onSubmit(signInForm: NgForm){
  if (!signInForm.valid){
    this.formCompleted = true;
    this.credentialsInvalid = false;
    return;
  }
  this.checkCredentials(signInForm);
  signInForm.resetForm();
}

private checkCredentials(signInForm: NgForm){
  const signInData = new SignInData(signInForm.value.username,signInForm.value.password);
  if(!this.authenticationService.authenticate(signInData)){
    this.formCompleted = false;
    this.credentialsInvalid = true;
  }
}

}
