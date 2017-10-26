import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EventItemComponent} from './components/event-item/event-item.component';
import {EventFullInfoComponent} from './components/event-full-info/event-full-info.component';


const routes: Routes = [
    {path: 'events',
        children: [
            {path: ':id', component: EventFullInfoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EventSearcherRoutesModule {
}

export const eventSearcherRouting = [EventItemComponent];
