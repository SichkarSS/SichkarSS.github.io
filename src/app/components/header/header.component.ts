import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('headerContainer') headerContainer: ElementRef;

    public ballShouldBeDown = false;
    public ballShouldBeLeftOut = false;
    public startFalling = false;
    public isAnimationShouldStart = false;
    public window = window;
    public leftOutOfScreen: number;
    public ICON_SIZE = 30;

    constructor() {
    }

    ngOnInit() {
        const mayBeMargin = (window.innerWidth - this.headerContainer.nativeElement.clientWidth) / 2;
        this.leftOutOfScreen = (mayBeMargin > 0 ? mayBeMargin : 0) + this.ICON_SIZE;
    }

    moveTheBall() {
        this.ballShouldBeDown = true;
        this.isAnimationShouldStart = true;
    }

    returnTheBall() {
        setTimeout(() => {
            this.ballShouldBeDown = false;
            this.isAnimationShouldStart = false;
        }, 1000);
    }

    onTransitionEnd() {
        this.isAnimationShouldStart = false;
    }
}
