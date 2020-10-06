import { Component, OnInit } from '@angular/core';
import {Tester} from '../posts.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-testerdata-list',
  templateUrl: './testerdata-list.component.html',
  styleUrls: ['./testerdata-list.component.css']
})
export class TesterdataListComponent implements OnInit {

  testers: Tester[] = [];

  constructor(public postsService : PostsService) { 
  }

  ngOnInit(){
    this.testers = this.postsService.getTesters(); 
  }

  remove(){
    this.testers.length=0;
    }
}