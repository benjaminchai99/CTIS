import {Patient} from './tester-post.model';
import {Injectable} from '@angular/core';

@Injectable ({providedIn: 'root'})

export class PostsService { //create a service class
  private patient: Patient[] = []; // set type to Post array(model) and assign to empty array

  //to retrieve the post
  getPosts(){
    return this.patient; //creating new array by copying the old array
  }

  // to add a post
  addPost (firstName: string, lastName: string, patientType: string, symptoms: string){ //method to add post with arguments
    const patient: Patient = {firstName: firstName, lastName: lastName, patientType: patientType, symptoms: symptoms}; //variable storing values of post
    this.patient.push(patient); //push the new post into posts array
  }

}
