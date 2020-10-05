import { Component, OnInit } from '@angular/core';
import {Patient} from '../../tester-post.model';
import {PostsService} from '../../tester-posts.service';

@Component ({
  selector: 'app-tester-post-list',
  templateUrl: './tester-post-list.component.html',
  styleUrls: ['./tester-post-list.component.css']
})

export class TesterPostListComponent implements OnInit{

  patient: Patient[] = [];

    // constructor: function that is called whenever Angular create new instance
    //public keyword: automatically create a new property in component and store incoming value
  constructor(public postsService: PostsService){ //instance: type of service defined
  }

  //function that automatically execute when Angular create this component. For basic installation
    ngOnInit() {
      this.patient = this.postsService.getPosts();
    }
  }

