import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../../tester-posts.service';

@Component ({
  selector: 'app-tester-post-create',
  templateUrl: './tester-post-create.component.html',
  styleUrls: ['./tester-post-create.component.css']
})

export class TesterPostCreateComponent{
  enteredTitle = '';
  eneteredContent = '';

/*
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
*/

  // connect to service
  constructor(public postsService: PostsService){}

  //@Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }

    this.postsService.addPost(form.value.firstName, form.value.lastName, form.value.patientType, form.value.symptoms);
    form.resetForm();
    //const post: Post = {
      //title: form.value.title,
     // content: form.value.content
    //};
    //this.postCreated.emit (post);
  }
}
