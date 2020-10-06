import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterHeaderComponent } from './components/tester-header/tester-header.component';
import { TesterFooterComponent } from './components/tester-footer/tester-footer.component';
import { TesterSidebarComponent } from './components/tester-sidebar/tester-sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    TesterHeaderComponent,
    TesterFooterComponent,
    TesterSidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    TesterHeaderComponent,
    TesterFooterComponent,
    TesterSidebarComponent
  ]
})
export class TesterSharedModule { }
