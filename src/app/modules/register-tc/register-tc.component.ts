import { Component, OnInit } from '@angular/core';

import {TestCentre} from './post.model';

@Component({
  selector: 'app-register-tc',
  templateUrl: './register-tc.component.html',
  styleUrls: ['./register-tc.component.scss']
})
export class RegisterTCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  storedPosts: TestCentre[] = [];

  onPostAdded(post){
    this.storedPosts.push(post)
  }
}
