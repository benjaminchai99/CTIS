import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-header',
  templateUrl: './tester-header.component.html',
  styleUrls: ['./tester-header.component.scss']
})
export class TesterHeaderComponent implements OnInit {

  @Output() toogleSideBarForMe: EventEmitter<any> = new EventEmitter()

  ngOnInit() {} 

  toggleSideBar() {
    this.toogleSideBarForMe.emit();
  }

  constructor(public authenticationService: AuthenticationService){
  }

logout(){
  this.authenticationService.logout();
}

}