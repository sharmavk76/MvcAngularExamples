"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let EventsComponent = class EventsComponent {
    constructor() {
        this.title = "Events List";
        this.events = ['event 1', 'event 2', 'event 3', 'event 4'];
    }
};
EventsComponent = __decorate([
    core_1.Component({
        template: `
            <h2>{{title}}</h2>
            <ul>
                <li *ngFor="let event of events">
                  <a routerLink="/event-details">{{event}}</a>
                </li>
            </ul>
        `
    }), 
    __metadata('design:paramtypes', [])
], EventsComponent);
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=event.component.js.map