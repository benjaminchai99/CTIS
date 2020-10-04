import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterDefaultComponent } from './tester-default.component';
import { TesterDashboardComponent } from 'src/app/tester-modules/tester-dashboard/tester-dashboard.component';
import { RouterModule } from '@angular/router';
import { RecordNtComponent } from 'src/app/tester-modules/record-nt/record-nt.component';
import { TesterSharedModule } from 'src/app/tester-shared/tester-shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { UpdateTestComponent } from 'src/app/tester-modules/update-test/update-test.component';

@NgModule({
  declarations: [
    TesterDefaultComponent,
    TesterDashboardComponent,
    RecordNtComponent,
    UpdateTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TesterSharedModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatRadioModule,
    MatIconModule
  ]
})
export class TesterDefaultModule {}