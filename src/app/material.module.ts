
import { NgModule } from '@angular/core';

import { MaterialModule, MdSlideToggleModule, MdButtonModule, MdCardModule,
         MdMenuModule, MdToolbarModule, MdTabsModule,
         MdDialogModule,
         MdIconModule, MdSidenavModule, MdCheckboxModule } from '@angular/material';


@NgModule({
    imports: [
        MaterialModule,
        MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdDialogModule
    ],
    exports: [
        MaterialModule,
        MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdDialogModule
    ],
})
export class ValyrianMaterialModule { }
