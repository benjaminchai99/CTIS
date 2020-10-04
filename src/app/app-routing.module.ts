import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { RegisterTCComponent } from './modules/register-tc/register-tc.component';
import { LoginComponent } from './login/login.component';
import { TesterDashboardComponent } from './tester-modules/tester-dashboard/tester-dashboard.component';
import { RecordNtComponent } from './tester-modules/record-nt/record-nt.component';
import { AuthGuard } from './guards/auth.guard';
import { TesterDefaultComponent } from './tester-layouts/tester-default/tester-default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UpdateTestComponent } from './tester-modules/update-test/update-test.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent},
  {path: 'manager-component',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'manager-dashboard',
    component: DashboardComponent
  }, {
    path: 'register-Test-Centre',
    component: RegisterTCComponent
  }]
},
{path: 'tester-component',
  component: TesterDefaultComponent,
  children: [{
    path: '',
    component: TesterDashboardComponent
  }, {
    path: 'tester-dashboard',
    component: DashboardComponent
  }, {
    path: 'record-new-test',
    component: RecordNtComponent
  }, {
    path: 'update-test',
    component: UpdateTestComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
