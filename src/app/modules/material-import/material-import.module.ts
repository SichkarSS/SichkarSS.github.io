import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {MdIconModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdIconModule
    ],
    exports: [
        MdIconModule
    ],
    declarations: []
})
export class MaterialImportModule {
}
