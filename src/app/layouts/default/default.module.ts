import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { RegisterTCComponent } from 'src/app/modules/register-tc/register-tc.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { RegisterTcoComponent } from 'src/app/modules/register-tco/register-tco.component';
import { ManageTksComponent } from 'src/app/modules/manage-tks/manage-tks.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    RegisterTCComponent,
    RegisterTcoComponent,
    ManageTksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class DefaultModule { }


