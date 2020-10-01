import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

    constructor(){
    }

    ValidateUser (username:string, password:string){
        if (username == 'tester' && password == 'tester'){
            return true;
        }
    }
}