
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutes } from './routes'

import 'hammerjs';


import { AppComponent }  from './app.component';
import { MasonryModule } from './masonry/module';
import { ValyrianMaterialModule } from './material.module';

import { HeaderComponent,
         DashboardContainer,
         TodoGroupsComponent,
         TodoEntriesComponent,
         TodoEntryComponent,
         TodoEntryDialog,
         TodoEntryCheckboxItemComponent } from './ui/index';

import { Error404Component } from './errors/404.component'

import { Logger, InMemoryApiService, TodoGroupService, TodoEntryService } from './services/index';



@NgModule({
  imports:      [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ValyrianMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryApiService),
    MasonryModule,

    RouterModule.forRoot(AppRoutes)
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardContainer,
    Error404Component,
    TodoGroupsComponent,
    TodoEntriesComponent,
    TodoEntryComponent,
    TodoEntryDialog,
    TodoEntryCheckboxItemComponent
  ],

  providers: [
    Logger,
    TodoGroupService,
    TodoEntryService
  ],

  entryComponents: [
    TodoEntryDialog
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
