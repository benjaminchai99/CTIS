import {Tester} from "./posts.model";
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService {
  private testers: Tester[] = []; 

  getTesters(){
  return this.testers; 
  }

  addTester(officerID: string, username: string, password: string, fullname: string){
  const testerData: Tester = {officerID: officerID, username: username, password: password, fullname: fullname}; 
  this.testers.push(testerData); 
  }
}
