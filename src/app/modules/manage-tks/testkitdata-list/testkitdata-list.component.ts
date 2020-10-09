import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { TestKit } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-testkitdata-list',
  templateUrl: './testkitdata-list.component.html',
  styleUrls: ['./testkitdata-list.component.css']
})
export class TestkitdataListComponent implements OnInit {

  
  testKits: TestKit[] = [];
  //editState: boolean = false;

  constructor(public postsService : PostsService, public authenticationService: AuthenticationService) { 
  }

  ngOnInit(){
    this.testKits = this.postsService.getTestKits();
  }

  /*
  edit(testKit: TestKit){
    this.postsService.editTestKit(testKit);
    this.editState = true;
    this.postsService.editStateCondition(this.editState);
  }
  */
}

  

 