import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {EventItem} from '../../entities/EventItem';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html',
    styleUrls: ['./event-item.component.scss', '../../../../styles/styles.shared.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EventItemComponent implements OnInit {

    @Input() eventItem: EventItem;

    constructor() {
    }

    ngOnInit() {
        this.eventItem.date = new Date(this.eventItem.date);
    }

}
