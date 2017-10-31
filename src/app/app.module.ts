import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {MaterialImportModule} from './modules/material-import/material-import.module';
import {AppRoutingModule} from './app.routes.module';
import {EventSearcherModule} from './modules/event-searcher/event-searcher.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {MessagesComponent} from './components/messages/messages.component';
import {FriendsComponent} from './components/friends/friends.component';
import {ShopComponent} from './components/shop/shop.component';
import {EventUnsubscriberComponent} from './components/event-unsubscriber/event-unsubscriber.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialImportModule,
        AppRoutingModule,
        EventSearcherModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        MainContainerComponent,
        MessagesComponent,
        FriendsComponent,
        ShopComponent,
        EventUnsubscriberComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
