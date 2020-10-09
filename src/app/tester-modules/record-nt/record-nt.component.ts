import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-record-nt',
  templateUrl: './record-nt.component.html',
  styleUrls: ['./record-nt.component.scss']
})
export class RecordNtComponent implements OnInit {

  //createTest: FormGroup;
 // test: any = {};
  constructor(public authenticationService: AuthenticationService/*, private fb: FormBuilder */){
  }

  ngOnInit(): void {
    //this.createTestForm();
  }

  patientType: string;
  patient: string[] = ['Returnee', 'Quarantined', 'Close Contact', 'Infected', 'Suspected'];

  hide = true;

  value = 'Clear me';

  /*createTestForm(){
    this.createTest = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      patientType: [null, Validators.required],
      symptoms: [null, Validators.required]
    })
  } */

    //onSubmit(){
     // console.log (this.createTest);
     // this.test = Object.assign(this.test, this.createTest.value);
     // localStorage.setItem ('Test', this.test);
    //}
}