import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { TesterPostCreateComponent } from './tester-posts/tester-post-create/tester-post-create.component';
import { TesterPostListComponent } from './tester-posts/tester-post-list/tester-post-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    TesterPostCreateComponent,
    TesterPostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule
  ],
  exports: [
    TesterPostCreateComponent,
    TesterPostListComponent
  ]
})
export class RecordNTModule { 
}