import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import {Patient} from '../../tester-post.model';
import { PostsService } from '../../tester-posts.service';

const ELEMENT_DATA: Patient[] = [
  //{username: 'd', password: 'f',testID: '1', firstName: 'H', lastName: 'f', patientType: 'H', symptoms: 'f'},
  //{username: 'd', password: 'f',testID: '1', firstName: 'H', lastName: 'f', patientType: 'H', symptoms: 'f'},
  //{username: 'd', password: 'f',testID: '1', firstName: 'H', lastName: 'f', patientType: 'H', symptoms: 'f'}
];



@Component ({
  selector: 'app-tester-post-list',
  templateUrl: './tester-post-list.component.html',
  styleUrls: ['./tester-post-list.component.css']
})

export class TesterPostListComponent implements OnInit{

  patient: Patient[] = [];

  constructor(public postsService: PostsService){
  }

  //function that automatically execute when Angular create this component. For basic installation
    ngOnInit() {
      this.patient = this.postsService.getPosts();
    };
  }