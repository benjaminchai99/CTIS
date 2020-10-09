import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { GlobalConstants } from 'src/app/common/global-constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestCentre } from 'src/app/modules/register-tc/post.model'
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  
  constructor(public postsService: PostsService, private _snackBar: MatSnackBar, public authenticationService: AuthenticationService) {}

  testCenters: TestCentre[] = [];

  onAddTestCentre(form: NgForm){
    if (form.invalid){
      return;
    }
    
    var centreID="";

   function generateCentreID()
    {
      centreID = "TC"+ GlobalConstants.centreIDnum;
      GlobalConstants.centreIDnum++;
      return centreID;
    }

  if (GlobalConstants.centreCount < 1){
    this._snackBar.open("Test Centre registered successfully", "Done", {
    duration: 3000,
    });
    centreID = generateCentreID();
    this.postsService.addTestCentre(centreID,form.value.testCentreName);
    GlobalConstants.TCRegistered = true;
  }
    
  if (GlobalConstants.centreCount == 1 || GlobalConstants.centreCount > 1){
    this._snackBar.open("Only 1 test centre is allowed at 1 time", "Done", {
    duration: 3000,
    });
  }
  
  GlobalConstants.centreCount++;

  form.resetForm();
  }
}

