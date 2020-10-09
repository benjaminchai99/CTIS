import {Patient} from './tester-post.model';
import {Injectable} from '@angular/core';

@Injectable ({providedIn: 'root'})

export class PostsService { 
  private patient: Patient[] = []; 

  getPosts(){
    return this.patient; 
  }

  // to add a post
  addPost (testID: string,firstName: string, lastName: string, patientType: string, symptoms: string, username: string, password: string){ 
    const patient: Patient = {testID: testID,firstName: firstName, lastName: lastName, patientType: patientType, symptoms: symptoms, username: username, password: password}; 
    this.patient.push(patient); 

}
}