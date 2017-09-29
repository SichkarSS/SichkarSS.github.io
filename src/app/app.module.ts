import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {MaterialImportModule} from './modules/material-import/material-import.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {MainContainerComponent} from './components/main-container/main-container.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialImportModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        MainContainerComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
