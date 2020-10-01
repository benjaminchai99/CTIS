import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from './loginservice';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector : 'app-header',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent {

constructor(private router: Router , private loginservice: LoginService){}

hide = true;

  private username;
  private password;

  ValidateUser(){
    if(this.loginservice.ValidateUser(this.username, this.password)){
      this.router.navigate( ['src/app/layouts/default/default.component'])}
    else {
      this.router.navigate (['./login']);
    }
  }
}


