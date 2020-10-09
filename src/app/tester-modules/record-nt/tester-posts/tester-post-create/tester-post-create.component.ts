import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../../tester-posts.service';
import { TesterGlobalConstants } from 'src/app/tester-common/tester-global.constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { GlobalConstants } from 'src/app/common/global-constants';

interface PatientType {
  value: string;
  viewValue: string;
}

@Component ({
  selector: 'app-tester-post-create',
  templateUrl: './tester-post-create.component.html',
  styleUrls: ['./tester-post-create.component.css']
})

export class TesterPostCreateComponent{

  enteredTitle = '';
  eneteredContent = '';

  hide = true;

  patientTypes: PatientType[] = [
    {value: 'Returnee', viewValue: 'Returnee'},
    {value: 'Quarantined', viewValue: 'Quarantined'},
    {value: 'Close Contact', viewValue: 'Close Contact'},
    {value: 'Suspected', viewValue: 'Suspected'},
    {value: 'Infected', viewValue: 'Infected'}
  ];


  constructor(public postsService: PostsService, private _snackBar: MatSnackBar,public authenticationService: AuthenticationService){}

  //@Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }
    GlobalConstants.TestRecorded = true;

    this._snackBar.open("Test recorded successfully", "Done", {
      duration: 3000,
    });

    var testID="";

    function generateTestID()
     {
       testID = "TS"+ TesterGlobalConstants.testID;
       TesterGlobalConstants.testID++;
       return testID;
     }
     
     testID = generateTestID();


    this.postsService.addPost(testID, form.value.firstName, form.value.lastName, form.value.patientType, form.value.symptoms, form.value.username, form.value.password);
    form.resetForm();
  }
}