import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent{

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

