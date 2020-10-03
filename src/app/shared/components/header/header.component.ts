import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() expandSidebarNow: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
  }

  expandSidebar(){
    this.expandSidebarNow.emit();
  }

  constructor(public authenticationService: AuthenticationService){
  }

logout(){
  this.authenticationService.logout();
}
}
