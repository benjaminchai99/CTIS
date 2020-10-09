import {Patient} from './testerUpdate-post.model';
import {Injectable} from '@angular/core';

@Injectable ({providedIn: 'root'})

export class PostsService { //create a service class
  private patient: Patient[] = []; // set type to Post array(model) and assign to empty array

  //to retrieve the post
  getPosts(){
    return this.patient; //creating new array by copying the old array
  }

  // to add a post
  addPost (firstName: string, lastName: string, patientType: string, symptoms: string, username: string, password: string){ //method to add post with arguments
    const patient: Patient = {firstName: firstName, lastName: lastName, patientType: patientType, symptoms: symptoms, username: username, password: password}; //variable storing values of post
    this.patient.push(patient); //push the new post into posts array
  }

}