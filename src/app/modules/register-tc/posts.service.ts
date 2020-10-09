import {TestCentre} from "./post.model";
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService {
  private testCentres: TestCentre[] = []; 

  getTestCentres(){
  return this.testCentres; 
  }
  
  addTestCentre(testCentreID: string, testCentreName: string){
  const testCentreData: TestCentre = {testCentreID: testCentreID, testCentreName: testCentreName}; 
  if(this.testCentres.length>1){
    return;
  }
  console.log('Added');
  this.testCentres.push(testCentreData); 
  }

  
}
