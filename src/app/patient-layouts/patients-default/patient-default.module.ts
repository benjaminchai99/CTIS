import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsDefaultComponent } from './patients-default.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { PatientDashboardComponent } from 'src/app/patient-modules/patient-dashboard/patient-dashboard.component';
import { RecordNTModule } from 'src/app/tester-modules/record-nt/record-nt.module';
import { PatientSharedModule } from 'src/app/patient-shared/patient-shared.module';



@NgModule({
  declarations: [
    PatientsDefaultComponent,
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PatientSharedModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatRadioModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    PatientSharedModule,
    RecordNTModule
  ]
})
export class PatientsDefaultModule { }
