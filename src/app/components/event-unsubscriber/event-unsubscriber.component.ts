import {Component, OnDestroy} from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';

@Component({template: '<ng-container></ng-container>'})
export class EventUnsubscriberComponent implements OnDestroy {

    protected ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor() {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
