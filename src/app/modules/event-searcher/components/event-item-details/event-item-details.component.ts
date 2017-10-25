import {Component, OnInit, Input} from '@angular/core';
import {EventItem} from '../../entities/EventItem';

@Component({
    selector: 'app-event-item-details',
    templateUrl: './event-item-details.component.html',
    styleUrls: ['./event-item-details.component.scss']
})
export class EventItemDetailsComponent implements OnInit {

    @Input() eventItem: EventItem;

    constructor() {
    }

    ngOnInit() {
    }

}
