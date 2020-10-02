import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

    constructor(){
    }

    ValidateUser (username:string, password:string){
        if (username == 'tester' && password == 'tester'){
            let user ={
                role : "tester",
            }
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        }
    }
}