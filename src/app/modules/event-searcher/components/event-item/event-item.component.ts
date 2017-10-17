import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html',
    styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

    @Input() title: string;
    @Input() address: string;
    @Input() description: string;

    constructor() {
    }

    ngOnInit() {
    }

}
