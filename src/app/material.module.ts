
import { NgModule } from '@angular/core';

import { MdSlideToggleModule, MdButtonModule, MdCardModule,
         MdMenuModule, MdToolbarModule, MdTabsModule,
         MdIconModule, MdSidenavModule } from '@angular/material';


@NgModule({
    imports: [
        MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdSidenavModule
    ],
    exports: [
        MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdSidenavModule
    ],
})
export class ValyrianMaterialModule { }
