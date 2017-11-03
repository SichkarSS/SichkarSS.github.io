import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpService} from 'app/services/http/http.service';
import {events} from './event-list.constants';
import {EventItem} from '../../entities/EventItem';

import {EventUnsubscriberComponent} from 'app/components/event-unsubscriber/event-unsubscriber.component';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss', '../../../../styles/styles.shared.scss']
})
export class EventListComponent extends EventUnsubscriberComponent implements OnInit {

    stateCtrl: FormControl;
    hello: any;
    events: Array<EventItem>;
    isLoadingComplete = false;
    states: any[] = [
        {
            name: 'Arkansas',
            population: '2.978M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
        },
        {
            name: 'California',
            population: '39.14M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
        },
        {
            name: 'Florida',
            population: '20.27M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
        },
        {
            name: 'Texas',
            population: '27.47M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
        }
    ];

    constructor(private httpService: HttpService) {
        super();
        this.stateCtrl = new FormControl();
    }

    ngOnInit() {
        this.httpService.getInfo()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(response => {
                this.hello = response;
            });

        this.httpService.getAllEvents()
            .takeUntil(this.ngUnsubscribe)
            .map(res => <EventItem[]>res.json())
            .subscribe(data => {
                this.events = data;
                this.isLoadingComplete = true;
            });
    }

}
