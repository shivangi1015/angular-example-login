import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes'

import { AppComponent }  from './app.component';
import {HighlightDirective} from "./highlight.directive";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

import {HttpModule} from '@angular/http'

@NgModule({
  imports:      [ BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
      HttpModule
  ],
  declarations: [ AppComponent, HighlightDirective, HomeComponent, LoginComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
