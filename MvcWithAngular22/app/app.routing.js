"use strict";
const router_1 = require('@angular/router');
const event_component_1 = require('./event.component');
const add_event_component_1 = require('./add-event.component');
const event_details_component_1 = require('./event-details.component');
const appRoutes = [
    { path: '', component: event_component_1.EventsComponent },
    { path: 'event-details', component: event_details_component_1.EventDetailComponent },
    { path: 'add-event', component: add_event_component_1.AddEventComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map