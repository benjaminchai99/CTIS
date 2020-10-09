import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { TestKit } from './post.model';

@Component({
  selector: 'app-manage-tks',
  templateUrl: './manage-tks.component.html',
  styleUrls: ['./manage-tks.component.scss']
})
export class ManageTksComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }


}
