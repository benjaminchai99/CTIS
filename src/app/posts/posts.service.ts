import {Post} from "./post.model";
import {Injectable} from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class PostsService {
  //create a service class
  private posts: Post[] = []; //Set type to Post array(model) and assign to empty array

  //retrieve the post
  getPosts(){
  return this.posts; //creating new array by coping the old array
  }

  //add a post
  addPost(title: string, content: string){ //method to add post with arguments
  const post: Post = {title: title, content: content}; //variable storing values of post
  this.posts.push(post); // push the new post into posts array
  }
}
