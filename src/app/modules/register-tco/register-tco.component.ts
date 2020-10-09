import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-register-tco',
  templateUrl: './register-tco.component.html',
  styleUrls: ['./register-tco.component.scss']
})
export class RegisterTcoComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
