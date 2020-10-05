import {Component, OnInit} from '@angular/core';
import {TestCentre} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  testCentres: TestCentre[] = [];

  constructor(public postsService : PostsService) { 
  }

  ngOnInit(){
    this.testCentres = this.postsService.getTestCentres(); 
  }

  remove(){
  this.testCentres.length=0;
  }
}



