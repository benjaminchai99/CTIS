import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterDefaultComponent } from './tester-default.component';
import { TesterDashboardComponent } from 'src/app/tester-modules/tester-dashboard/tester-dashboard.component';
import { RouterModule } from '@angular/router';
import { RecordNtComponent } from 'src/app/tester-modules/record-nt/record-nt.component';
import { TesterSharedModule } from 'src/app/tester-shared/tester-shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    TesterDefaultComponent,
    TesterDashboardComponent,
    RecordNtComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TesterSharedModule,
    MatSidenavModule
  ]
})
export class TesterDefaultModule { }
