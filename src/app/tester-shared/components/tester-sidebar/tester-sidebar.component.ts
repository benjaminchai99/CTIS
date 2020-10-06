import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-sidebar',
  templateUrl: './tester-sidebar.component.html',
  styleUrls: ['./tester-sidebar.component.scss']
})
export class TesterSidebarComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {
  }

}
