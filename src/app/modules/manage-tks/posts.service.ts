import {TestKit} from "./post.model";
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostsService {
  private testKits: TestKit[] = []; 
  selectedTestKit: TestKit = {
    testKitID: '',
    testKitName: '',
    stock: 0
  };
  editState: boolean = false;

  getTestKits(){
  return this.testKits; 
  }

  /*
  getSelectedTestKit(){
    return this.selectedTestKit;
  }
  */
 
  getEditState(){
    return this.editState;
  }

  addTestKit(testKitID: string, testKitName: string, stock: number){
  const testKitData: TestKit = {testKitID: testKitID, testKitName: testKitName, stock: stock}; 
  this.testKits.push(testKitData); 
  }
/*
  editTestKit(testKit: TestKit){
   this.selectedTestKit=testKit;
   console.log(this.selectedTestKit);
  }
  
  editStateCondition(editState){
    this.editState = editState;
  }
*/
}
