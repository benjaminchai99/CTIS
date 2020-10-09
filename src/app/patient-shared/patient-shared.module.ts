import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PatientHeaderComponent } from './patient-component/patient-header/patient-header.component';
import { PatientFooterComponent } from './patient-component/patient-footer/patient-footer.component';
import { PatientSidebarComponent } from './patient-component/patient-sidebar/patient-sidebar.component';

@NgModule({
  declarations: [
    PatientHeaderComponent,
    PatientFooterComponent,
    PatientSidebarComponent
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
    PatientHeaderComponent,
    PatientFooterComponent,
    PatientSidebarComponent
  ]
})
export class PatientSharedModule { 
}