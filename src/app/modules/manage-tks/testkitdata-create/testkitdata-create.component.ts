import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { GlobalConstants } from 'src/app/common/global-constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { TestKit } from '../post.model';

@Component({
  selector: 'app-testkitdata-create',
  templateUrl: './testkitdata-create.component.html',
  styleUrls: ['./testkitdata-create.component.css']
})
export class TestkitdataCreateComponent implements OnInit{
  
  constructor(public postsService: PostsService, private _snackBar: MatSnackBar,public authenticationService: AuthenticationService) {}
  private testKits: TestKit[] = []; 
  selectedTestKit: TestKit = {
    testKitID: '',
    testKitName: '',
    stock: 0
  };
  rateControl: FormControl;

  editState: boolean = false;
  ngOnInit(){
   /*
   this.selectedTestKit = this.postsService.getSelectedTestKit();
   this.editState = this.postsService.getEditState();
   */
  }

  onAddTestKit(form: NgForm){
    if (form.invalid){
      return;
    }

    if(GlobalConstants.TCRegistered == false){
      this._snackBar.open("Register a Test Centre first", "Done", {
        duration: 3000,
      });
      return;
    }

    this._snackBar.open("Test Kit added successfully", "Done", {
      duration: 3000,
    });

    var testKitID="";

   function generateTestKitID()
    {
      testKitID = "TK"+ GlobalConstants.testKitIDnum;
      GlobalConstants.testKitIDnum++;
      return testKitID;
    }
    
    testKitID = generateTestKitID();

   this.postsService.addTestKit(testKitID, form.value.testKitName, form.value.stock);
  //this.editState = false;
   form.resetForm();
  }
}
