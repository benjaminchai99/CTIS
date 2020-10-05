import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-header',
  templateUrl: './tester-header.component.html',
  styleUrls: ['./tester-header.component.scss']
})
export class TesterHeaderComponent{

  @Input() deviceXs: boolean; 
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  constructor(public authenticationService: AuthenticationService){
  }

logout(){
  this.authenticationService.logout();
}
}
