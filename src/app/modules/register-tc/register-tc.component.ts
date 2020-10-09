import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

import {TestCentre} from './post.model';

@Component({
  selector: 'app-register-tc',
  templateUrl: './register-tc.component.html',
  styleUrls: ['./register-tc.component.scss']
})
export class RegisterTCComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  storedPosts: TestCentre[] = [];

  onPostAdded(post){
    this.storedPosts.push(post)
  }
}
