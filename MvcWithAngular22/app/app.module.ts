import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';

import { routing,
    appRoutingProviders }  from './app.routing';

import {EventsComponent} from './event.component';
import { AddEventComponent }  from './add-event.component';
import { EventDetailComponent }    from './event-details.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    providers: [appRoutingProviders],
    declarations: [AppComponent,EventsComponent,AddEventComponent,EventDetailComponent],
    bootstrap: [AppComponent]
    
})
export class AppModule { }