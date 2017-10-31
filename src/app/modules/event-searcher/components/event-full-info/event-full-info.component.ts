import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

import {EventUnsubscriberComponent} from 'app/components/event-unsubscriber/event-unsubscriber.component';

@Component({
    selector: 'app-event-full-info',
    templateUrl: './event-full-info.component.html',
    styleUrls: ['./event-full-info.component.scss']
})
export class EventFullInfoComponent extends EventUnsubscriberComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.route.params
            .takeUntil(this.ngUnsubscribe)
            .subscribe(params => {
                this.id = params.id;
            });
    }

}
