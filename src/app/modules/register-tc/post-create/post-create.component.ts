import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  enteredTestCentreName= '';

  constructor(public postsService: PostsService) {}

  onAddTestCentre(form: NgForm){
    if (form.invalid){
      return;
    }

   this.postsService.addTestCentre(form.value.testCentreName);
   form.resetForm();
  }
}
