import {Component, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts: Post[] = [];

  /*posts = [
    {title: 'First Post', content: 'This is the first post\'s content'},
    {title: 'Second Post', content: 'This is the second post\'s content'},
    {title: 'Third Post', content: 'This is the third post\'s content'}
  ];
*/

  // constructor: function that is called whenever Angular create new instance
  // public keyword: automatically create a new property in component and store incoming value
  constructor(public postsService : PostsService) { // Instance: type of service defined
  }

  // function that automatically execute when Angular create this component. For basic initialisation
  ngOnInit(){
    this.posts = this.postsService.getPosts(); // call the service to get posts
  }
}


