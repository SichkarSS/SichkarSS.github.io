import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {MaterialImportModule} from '../material-import/material-import.module';

import {EventListComponent} from './components/event-list/event-list.component';
import {MyEventsComponent} from './components/my-events/my-events.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialImportModule
    ],
    declarations: [
        EventListComponent,
        MyEventsComponent
    ]
})
export class EventSearcherModule {
}
