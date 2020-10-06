import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-testerdata-create',
  templateUrl: './testerdata-create.component.html',
  styleUrls: ['./testerdata-create.component.css']
})
export class TesterdataCreateComponent{

  hide = true;

  constructor(public postsService: PostsService) {}

  onAddTester(form: NgForm){
    if (form.invalid){
      return;
    }

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
