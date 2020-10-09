import { Component, OnInit } from '@angular/core';
import { TestCentre } from '../post.model';
import { PostsService } from '../posts.service';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  testCentres: TestCentre[] = [];

  constructor(public postsService : PostsService, public authenticationService: AuthenticationService) { 
  }

  ngOnInit(){
    this.testCentres = this.postsService.getTestCentres(); 
  }
  
}



