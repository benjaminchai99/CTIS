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
}];

/*
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'manager-dashboard', component: DefaultComponent,canActivate: [AuthGuard],

  children: [{
    path: 'manager-dashboard',
    component: DashboardComponent},
    {
    path: 'register-Test-Centre',
    component: RegisterTCComponent
  }]},
  {path: 'tester-dashboard', component: TesterDefaultComponent, canActivate: [AuthGuard],

  children: [{
    path: 'tester-dashboard', component: TesterDashboardComponent},
    {
    path: 'record-new-test', component: RecordNtComponent
  }]},];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
