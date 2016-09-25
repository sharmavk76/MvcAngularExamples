import {Component} from '@angular/core';
@Component({
    selector: 'my-events',
    template: `
            <h2>{{title}}</h2>
            <ul><li *ngFor="let event of events">{{event}}</li></ul>
        `
})
export class EventsComponent {
    title: string = "Events List";

    events: string[] = ['event 1', 'event 2', 'event 3', 'event 4'];

}