
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
    selectedOption: string;

    constructor(public dialog: MdDialog) { }



    openDialog(te: TodoEntry) {

        //console.log(JSON.stringify(te));

        let dialogRef = this.dialog.open(TodoEntryDialog, {
            data: te,
            height: '300px',
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}
