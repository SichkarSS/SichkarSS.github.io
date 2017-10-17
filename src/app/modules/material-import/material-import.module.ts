import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {
    MdIconModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdIconModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        MdIconModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: []
})
export class MaterialImportModule {
}
