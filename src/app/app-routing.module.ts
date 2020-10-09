import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { RegisterTCComponent } from './modules/register-tc/register-tc.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { TesterDefaultComponent } from './tester-layouts/tester-default/tester-default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegisterTcoComponent } from './modules/register-tco/register-tco.component';
import { ManageTksComponent } from './modules/manage-tks/manage-tks.component';
import { PatientsDefaultComponent } from './patient-layouts/patients-default/patients-default.component';
import { PatientDashboardComponent } from './patient-modules/patient-dashboard/patient-dashboard.component';
import { UpdateTestComponent } from './tester-modules/update-test/update-test.component';
import { TesterDashboardComponent } from './tester-modules/tester-dashboard/tester-dashboard.component';
import { RecordNtComponent } from './tester-modules/record-nt/record-nt.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent},
  {path: 'manager-component',
  component: DefaultComponent, canActivate: [AuthGuard],
  children: [{
    path: '',
    component: DashboardComponent, canActivate: [AuthGuard]
  }, {
    path: 'manager-dashboard',
    component: DashboardComponent, canActivate: [AuthGuard]
  }, {
    path: 'register-Test-Centre',
    component: RegisterTCComponent, canActivate: [AuthGuard]
  }, {
    path: 'record-Tester',
    component: RegisterTcoComponent, canActivate: [AuthGuard]
  }, {
    path: 'manage-Test-Kit-Stock',
    component: ManageTksComponent, canActivate: [AuthGuard]
  }],
},
{path: 'tester-component',
  component: TesterDefaultComponent, canActivate: [AuthGuard],
  children: [{
    path: '',
    component: TesterDashboardComponent,canActivate: [AuthGuard]
  }, {
    path: 'tester-dashboard',
    component: TesterDashboardComponent, canActivate: [AuthGuard]
  }, {
    path: 'record-new-test',
    component: RecordNtComponent, canActivate: [AuthGuard]
  }, {
    path: 'update-test',
    component: UpdateTestComponent, canActivate: [AuthGuard]
  }]
},
{path: 'patient-component',
  component: PatientsDefaultComponent, canActivate: [AuthGuard],
  children: [{
    path: '',
    component: PatientDashboardComponent,canActivate: [AuthGuard]
  }, {
    path: 'patient-dashboard',
    component: PatientDashboardComponent, canActivate: [AuthGuard]
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }