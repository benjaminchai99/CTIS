import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../../testerUpdate-posts.service';

interface PatientType {
  value: string;
  viewValue: string;
}


@Component ({
  selector: 'app-update-post-create',
  templateUrl: './testerUpdate-post-create.component.html',
  styleUrls: ['./testerUpdate-post-create.component.css']
})

export class UpdatePostCreateComponent{
  enteredTitle = '';
  eneteredContent = '';

  patientTypes: PatientType[] = [
    {value: 'Returnee', viewValue: 'Returnee'},
    {value: 'Quarantined', viewValue: 'Quarantined'},
    {value: 'CloseContac', viewValue: 'Close Contact'},
    {value: 'Suspected', viewValue: 'Suspected'},
    {value: 'Infected', viewValue: 'Infected'}
  ];
  
  constructor(public postsService: PostsService){}

  //@Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }

    this.postsService.addPost(form.value.firstName, form.value.lastName, form.value.patientType, form.value.symptoms, form.value.username, form.value.password);
    form.resetForm();
    //const post: Post = {
      //title: form.value.title,
     // content: form.value.content
    //};
    //this.postCreated.emit (post);
  }
}