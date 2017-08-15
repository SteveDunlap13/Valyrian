
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from './routes'


import { AppComponent }  from './app.component';

import { HeaderComponent, DashboardContainer, TodoGroupsComponent, TodoEntriesComponent, TodoEntryComponent } from './ui/index';
import { Error404Component } from './errors/404.component'

import { Logger, InMemoryApiService, TodoGroupService, TodoEntryService, ImageService } from './services/index';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryApiService),

    RouterModule.forRoot(AppRoutes)
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardContainer,
    Error404Component,
    TodoGroupsComponent,
    TodoEntriesComponent,
    TodoEntryComponent
  ],

  providers: [
    Logger,
    TodoGroupService,
    TodoEntryService,
    ImageService
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
