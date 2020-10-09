import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import {Tester} from '../posts.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-testerdata-list',
  templateUrl: './testerdata-list.component.html',
  styleUrls: ['./testerdata-list.component.css']
})
export class TesterdataListComponent implements OnInit {

  testers: Tester[] = [];

  constructor(public postsService : PostsService, public authenticationService: AuthenticationService) { 
  }

  ngOnInit(){
    this.testers = this.postsService.getTesters(); 
  }
}