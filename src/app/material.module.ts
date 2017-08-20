
import { NgModule } from '@angular/core';

import { MaterialModule, MdSlideToggleModule, MdButtonModule, MdCardModule,
         MdMenuModule, MdToolbarModule, MdTabsModule,
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
        MdCheckboxModule
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
        MdCheckboxModule
    ],
})
export class ValyrianMaterialModule { }
