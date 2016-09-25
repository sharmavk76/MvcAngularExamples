﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {EventsComponent} from './event.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,EventsComponent],
    bootstrap: [AppComponent]
    
})
export class AppModule { }