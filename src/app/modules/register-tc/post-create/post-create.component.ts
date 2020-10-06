import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  enteredTestCentreName= '';
  
  constructor(public postsService: PostsService) {}

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
    
    centreID = generateCentreID();

   this.postsService.addTestCentre(centreID,form.value.testCentreName);
   form.resetForm();
  }
}
