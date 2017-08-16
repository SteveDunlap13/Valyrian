

import { NgModule } from '@angular/core';
import { AngularMasonry, AngularMasonryBrick } from './index';


@NgModule({
    declarations: [
        AngularMasonry,
        AngularMasonryBrick
    ],
    exports: [
        AngularMasonry,
        AngularMasonryBrick
    ]
})
export class MasonryModule {

}
