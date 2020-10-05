import {TestCentre} from "./post.model";
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService {
  private testCentres: TestCentre[] = []; 

  getTestCentres(){
  return this.testCentres; 
  }

  addTestCentre(testCentreName: string){
  const testCentreNames: TestCentre = {testCentreName: testCentreName}; 
  this.testCentres.push(testCentreNames); 
  }
}
