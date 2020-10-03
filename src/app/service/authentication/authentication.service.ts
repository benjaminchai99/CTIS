import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly manager = new SignInData("a","a");
  private readonly tester = new SignInData("tester","pass123");
  private readonly patient = new SignInData("patient","pass123");

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['manager-dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean{
    return this.checkUsername(signInData.getUsername()) && this.checkPassword(signInData.getPassword());
  }

  private checkUsername(username: string): boolean{
    return username === this.manager.getUsername() || username === this.tester.getUsername() || username === this.patient.getUsername();
  }

  private checkPassword(password: string): boolean{
    return password === this.manager.getPassword() || password == this.tester.getPassword() || password == this.patient.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
