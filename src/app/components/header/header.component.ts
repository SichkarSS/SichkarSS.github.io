import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public isMouseOver = false;
    public isTransitionEnd = false;

    constructor() {
    }

    ngOnInit() {
    }

    moveTheBall() {
        this.isMouseOver = true;
        this.isTransitionEnd = false;
    }

    returnTheBall() {
        setTimeout(() => {
            this.isMouseOver = false;
        }, 500);
    }

    onTransitionEnd() {
        this.isTransitionEnd = true;
    }
}
