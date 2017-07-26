import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { JobsLookupComponent } from './components/jobs-lookup/jobs-lookup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphComponent } from './components/graph/graph.component';

import { JobService } from 'app/services/job.service';
import { MessageService } from 'app/services/message.service';

import {
    NullComponent,
    JobDashboardComponent,
    JobInfoComponent,
    JobPerfComponent,
    JobEnergyComponent,
    PublicDashboardComponent,
    PublicOverviewComponent,
    GeneralPublicViewComponent,
    SysadminDashboardComponent,
    SysadminOverviewComponent } from 'app/components';

@NgModule({
  declarations: [
    AppComponent,
    NullComponent,
    JobInfoComponent,
    JobsLookupComponent,
    NavbarComponent,
    GraphComponent,
    GeneralPublicViewComponent,
    JobDashboardComponent,
    JobPerfComponent,
    JobEnergyComponent,
    SysadminDashboardComponent,
    PublicDashboardComponent,
    PublicOverviewComponent,
    SysadminOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JobService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
