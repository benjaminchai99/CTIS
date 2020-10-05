import {Tester} from "./posts.model";
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService {
  private testers: Tester[] = []; 

  getTestCentres(){
  return this.testers; 
  }

  addTestCentre(username: string, password: string, fullname: string){
  const testerInfo: Tester = {username: username, password: password, fullname: fullname}; 
  this.testers.push(testerInfo); 
  }
}
