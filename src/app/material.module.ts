
import { NgModule } from '@angular/core';

import { MdSlideToggleModule, MdButtonModule, MdCardModule,
         MdMenuModule, MdToolbarModule, MdTabsModule,
         MdIconModule, MdSidenavModule, MdCheckboxModule } from '@angular/material';


@NgModule({
    imports: [
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
