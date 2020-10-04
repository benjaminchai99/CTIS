import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-footer',
  templateUrl: './tester-footer.component.html',
  styleUrls: ['./tester-footer.component.css']
})
export class TesterFooterComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {
  }

}
