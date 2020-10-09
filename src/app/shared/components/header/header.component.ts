import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Input() deviceXs: boolean; 
  @Output() expandSidebarNow: EventEmitter<any> = new EventEmitter();

  expandSidebar(){
    this.expandSidebarNow.emit();
  }

  constructor(public authenticationService: AuthenticationService){
  }

logout(){
  this.authenticationService.logout();
}
}

