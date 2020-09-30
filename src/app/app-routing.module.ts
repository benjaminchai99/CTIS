import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegisterTCComponent } from './modules/register-tc/register-tc.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
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
