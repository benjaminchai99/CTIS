import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-tester-header',
  templateUrl: './tester-header.component.html',
  styleUrls: ['./tester-header.component.scss']
})
export class TesterHeaderComponent{

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Input() deviceXs: boolean; 

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {}

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

logout(){
  this.authenticationService.logout();
}

}
