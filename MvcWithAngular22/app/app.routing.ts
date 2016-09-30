import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent }  from './event.component';
import { AddEventComponent }  from './add-event.component';
import { EventDetailComponent }    from './event-details.component';
const appRoutes: Routes = [
    { path: '', component: EventsComponent },
    { path: 'event-details', component: EventDetailComponent },
    { path: 'add-event', component: AddEventComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
