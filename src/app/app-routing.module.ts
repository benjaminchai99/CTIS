import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegisterTCComponent } from './modules/register-tc/register-tc.component';
import { LoginComponent } from './login/login.component';
import { TesterDefaultComponent } from './tester-layouts/tester-default/tester-default.component';
import { TesterDashboardComponent } from './tester-modules/tester-dashboard/tester-dashboard.component';
import { RecordNtComponent } from './tester-modules/record-nt/record-nt.component';

const routes: Routes = [
 
  {
  path: '',
  component: TesterDefaultComponent,

  children: [{
    path: '',
    component: TesterDashboardComponent
  },{
    path: 'record-new-test',
    component: RecordNtComponent
  }, {
    path: 'register-Test-Centre',
    component: RegisterTCComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
