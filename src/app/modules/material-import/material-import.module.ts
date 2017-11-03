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
    MatButtonModule,
    MatExpansionModule,
    NoConflictStyleCompatibilityMode,
    MatGridListModule,
    MatProgressSpinnerModule
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
        MatButtonModule,
        MatExpansionModule,
        NoConflictStyleCompatibilityMode,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MdIconModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        NoConflictStyleCompatibilityMode,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
    declarations: []
})
export class MaterialImportModule {
}
