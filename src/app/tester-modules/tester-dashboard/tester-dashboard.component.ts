import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-dashboard',
  templateUrl: './tester-dashboard.component.html',
  styleUrls: ['./tester-dashboard.component.css']
})
export class TesterDashboardComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {
  }

}
