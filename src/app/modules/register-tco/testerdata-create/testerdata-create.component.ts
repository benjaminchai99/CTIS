import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { GlobalConstants } from 'src/app/common/global-constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-testerdata-create',
  templateUrl: './testerdata-create.component.html',
  styleUrls: ['./testerdata-create.component.css']
})
export class TesterdataCreateComponent{

  hide = true;

  constructor(public postsService: PostsService, private _snackBar: MatSnackBar, public authenticationService: AuthenticationService) {}

  onAddTester(form: NgForm){
    if (form.invalid){
      return;
    }
    
    if(GlobalConstants.TCRegistered == false){
      this._snackBar.open("Register a Test Centre first", "Done", {
        duration: 3000,
      });
      return;
    }

    this._snackBar.open("Centre officer recorded successfully", "Done", {
      duration: 3000,
    });

    var officerID="";

   function generateOfficerID()
    {
      officerID = "CO"+ GlobalConstants.officerIDnum;
      GlobalConstants.officerIDnum++;
      return officerID;
    }
    
    officerID = generateOfficerID();

   this.postsService.addTester(officerID, form.value.username, form.value.password, form.value.fullname);
   form.resetForm();
  }
}
