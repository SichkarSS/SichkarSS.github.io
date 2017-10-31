import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialImportModule} from '../material-import/material-import.module';
import {EventSearcherRoutesModule} from './event-searcher.routes.module';

import {HttpService} from '../../services/http/http.service';

import {EventListComponent} from './components/event-list/event-list.component';
import {MyEventsComponent} from './components/my-events/my-events.component';
import {EventItemComponent} from './components/event-item/event-item.component';
import {EventItemDetailsComponent} from './components/event-item-details/event-item-details.component';
import {EventFullInfoComponent} from './components/event-full-info/event-full-info.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialImportModule,
        HttpModule,
        EventSearcherRoutesModule
    ],
    declarations: [
        EventListComponent,
        MyEventsComponent,
        EventItemComponent,
        EventItemDetailsComponent,
        EventFullInfoComponent
    ],
    providers: [
        HttpService
    ]
})
export class EventSearcherModule {
}
