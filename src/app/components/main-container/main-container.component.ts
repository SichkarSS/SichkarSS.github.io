import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TABS} from './main-container.constants';

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainContainerComponent implements OnInit {

    public TABS = TABS;

    constructor() {
    }

    ngOnInit() {
    }

}
