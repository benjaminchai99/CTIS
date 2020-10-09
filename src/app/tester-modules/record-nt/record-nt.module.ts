import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { TesterPostCreateComponent } from './tester-posts/tester-post-create/tester-post-create.component';
import { TesterPostListComponent } from './tester-posts/tester-post-list/tester-post-list.component';
import { MatButtonModule } from '@angular/material/button';

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
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    TesterPostCreateComponent,
    TesterPostListComponent
  ]
})
export class RecordNTModule { 
}