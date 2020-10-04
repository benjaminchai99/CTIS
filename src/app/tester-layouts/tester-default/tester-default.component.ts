import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-default',
  templateUrl: './tester-default.component.html',
  styleUrls: ['./tester-default.component.scss']
})
export class TesterDefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {}

  sideBarToggler($event){
    this.sideBarOpen = !this.sideBarOpen;
  }
}