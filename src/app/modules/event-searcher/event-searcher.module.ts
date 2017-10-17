import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialImportModule} from '../material-import/material-import.module';

import {HttpService} from '../../services/http.service';

import {EventListComponent} from './components/event-list/event-list.component';
import {MyEventsComponent} from './components/my-events/my-events.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialImportModule,
        HttpModule
    ],
    declarations: [
        EventListComponent,
        MyEventsComponent
    ],
    providers: [
        HttpService
    ]
})
export class EventSearcherModule {
}
