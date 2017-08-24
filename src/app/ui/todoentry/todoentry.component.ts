
import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { TodoEntryService } from '../../services/index';
import { TodoEntry } from '../../models/index';
import { TodoEntryDialog } from '../index';


@Component({
    selector: 'todoentry',
    templateUrl: 'todoentry.component.html',
    styleUrls: ['todoentry.component.scss']
})
export class TodoEntryComponent {

    @Input() todoEntry: TodoEntry;

    constructor(public dialog: MdDialog) { }



    openDialog(te: TodoEntry) {

        let dialogRef = this.dialog.open(TodoEntryDialog, {
            data: te,
            height: '300px',
            width: '400px',
            //disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log(result);
            // TODO: show toast of returned dialog result
        });
    }
}
