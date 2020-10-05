import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-record-nt',
  templateUrl: './record-nt.component.html',
  styleUrls: ['./record-nt.component.scss']
})
export class RecordNtComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService){
  }

  ngOnInit(): void {
  }

  patientType: string;
  patient: string[] = ['Returnee', 'Quarantined', 'Close Contact', 'Infected', 'Suspected'];

  hide = true;

  value = 'Clear me';

}
