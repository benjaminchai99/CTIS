import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TesterDefaultModule } from './tester-layouts/tester-default/tester-default.module';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { RecordNTModule } from './tester-modules/record-nt/record-nt.module';
import { PatientsDefaultModule } from './patient-layouts/patients-default/patient-default.module';
import { TesterDashboardComponent } from './tester-modules/tester-dashboard/tester-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTestComponent } from './tester-modules/update-test/update-test.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: TesterDashboardComponent},
  {path: 'update-test', component: UpdateTestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCheckboxModule,
    TesterDefaultModule,
    FormsModule,
    MatDividerModule,
    RecordNTModule,
    PatientsDefaultModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
