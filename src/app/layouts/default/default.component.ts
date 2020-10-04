import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarState = true;

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {
  }

  expandFunction($event){
    this.sideBarState = !this.sideBarState;
  }
}
