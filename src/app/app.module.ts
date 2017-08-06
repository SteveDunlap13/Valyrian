
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


import { AppComponent }  from './app.component';

import { DashboardContainer } from './containers/dashboard/dashboard.container';



@NgModule({
  imports:      [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
          { path: '', component: DashboardContainer, },
          { path: '**', redirectTo: '' }
      ])
  ],

  declarations: [
    AppComponent,
    DashboardContainer
  ],

  providers: [
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
