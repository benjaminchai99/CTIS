import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConstants } from 'src/app/common/global-constants';

interface PatientType {
  value: string;
  viewValue: string;
}

interface Result {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  patientTypes: PatientType[] = [
    {value: 'Returnee', viewValue: 'Returnee'},
    {value: 'Quarantined', viewValue: 'Quarantined'},
    {value: 'Close Contact', viewValue: 'Close Contact'},
    {value: 'Suspected', viewValue: 'Suspected'},
    {value: 'Infected', viewValue: 'Infected'}
  ];

  results: Result[] = [
    {value: 'Positive', viewValue: 'Positive'},
    {value: 'Negative', viewValue: 'Negative'}
  ];

  hide = true;

  constructor(public authenticationService: AuthenticationService, private _snackBar: MatSnackBar){
  }
  
  ngOnInit(): void {
  }

  

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }

    if(GlobalConstants.TestRecorded == false){
      this._snackBar.open("Record a test first", "Done", {
        duration: 3000,
      });
      return;
    }

    this._snackBar.open("Update successfully", "Done", {
      duration: 3000,
    });

    form.resetForm();

}}