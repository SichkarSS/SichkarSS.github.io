import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {MdIconModule, MatTabsModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdIconModule,
        MatTabsModule
    ],
    exports: [
        MdIconModule,
        MatTabsModule
    ],
    declarations: []
})
export class MaterialImportModule {
}
