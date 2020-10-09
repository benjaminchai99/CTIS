import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterDefaultComponent } from './tester-default.component';
import { RouterModule, Routes } from '@angular/router';

import { TesterSharedModule } from 'src/app/tester-shared/tester-shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { UpdateTestComponent } from 'src/app/tester-modules/update-test/update-test.component';
import { TesterDashboardComponent } from 'src/app/tester-modules/tester-dashboard/tester-dashboard.component';

import { RecordNtComponent } from 'src/app/tester-modules/record-nt/record-nt.component';

import { MatDividerModule } from '@angular/material/divider';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RecordNTModule } from 'src/app/tester-modules/record-nt/record-nt.module';

const appRoutes: Routes = [
  {path: 'record-nt', component: RecordNtComponent}, 
  {path: 'tester-dashboard', component: TesterDashboardComponent}
];

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
    MatIconModule,
    RecordNTModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class TesterDefaultModule {}