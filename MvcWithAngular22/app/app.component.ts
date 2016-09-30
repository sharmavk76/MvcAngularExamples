import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
            <nav class="navbar navbar-default">
            <button class="btn btn-default" routerLink="/">Events</button>
            <button class="btn btn-default" routerLink="add-event">Add New Event</button>
            </nav>
            <router-outlet></router-outlet>
            `
})
export class AppComponent { }