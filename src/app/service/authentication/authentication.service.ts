import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly manager = new SignInData("a","a");
  private readonly tester = new SignInData("b","b");
  private readonly patient = new SignInData("c","c");

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkManagerCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['manager-component/register-Test-Centre']);
      return true;
    }
    else if(this.checkTesterCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['tester-component']);
      return true;
    } 
    else if(this.checkPatientCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['patient-component']);
      return true;
    } 
    this.isAuthenticated = false;
    return false;
  }

  private checkManagerCredentials(signInData: SignInData): boolean{
    return this.checkManagerUsername(signInData.getUsername()) && this.checkManagerPassword(signInData.getPassword());
  }

  private checkManagerUsername(username: string): boolean{
    return username === this.manager.getUsername();
  }

  private checkManagerPassword(password: string): boolean{
    return password === this.manager.getPassword();
  }

  private checkTesterCredentials(signInData: SignInData): boolean{
    return this.checkTesterUsername(signInData.getUsername()) && this.checkTesterPassword(signInData.getPassword());
  }

  private checkTesterUsername(username: string): boolean{
    return username === this.tester.getUsername();
  }

  private checkTesterPassword(password: string): boolean{
    return password === this.tester.getPassword();
  }

  private checkPatientCredentials(signInData: SignInData): boolean{
    return this.checkPatientUsername(signInData.getUsername()) && this.checkPatientPassword(signInData.getPassword());
  }

  private checkPatientUsername(username: string): boolean{
    return username === this.patient.getUsername();
  }

  private checkPatientPassword(password: string): boolean{
    return password === this.patient.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
