import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventListComponent} from './components/event-list/event-list.component';
import {MyEventsComponent} from './components/my-events/my-events.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        EventListComponent,
        MyEventsComponent
    ]
})
export class EventSearcherModule {
}
