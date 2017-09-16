
import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { TodoEntryService } from '../../services/index';
import { TodoEntry } from '../../models/index';


@Component({
    selector: 'todoentry-dialog',
    templateUrl: 'todoentry-dialog.component.html',
})
@AutoUnsubscribe()
export class TodoEntryDialog implements OnInit, OnChanges {

    private todoEntryForm: FormGroup;


    constructor( @Inject(MD_DIALOG_DATA) public todoEntry: TodoEntry,
        private fb: FormBuilder,
        private todoEntryService: TodoEntryService,
        public dialogRef: MdDialogRef<TodoEntryDialog>) {

        this.createForm();
    }

    ngOnInit() {

        this.revert();
    }
    ngOnChanges() {

        this.revert();
    }




    createForm() {

        this.todoEntryForm = this.fb.group({
            title: '',
            description: ''
        });
    }

    revert() {

        this.todoEntryForm.reset({
            title: this.todoEntry.title,
            description: this.todoEntry.description
        });
    }

    submit() {

        this.todoEntry = this.prepareSave();
        this.todoEntryService.saveTodoEntry(this.todoEntry).subscribe(result => {
            this.dialogRef.close('save');
        });
    }

    prepareSave(): TodoEntry {

        let formModel = this.todoEntryForm.value;

        let saveTodoEntry: TodoEntry = this.todoEntry;
        saveTodoEntry.title = formModel.title as string;
        saveTodoEntry.description = formModel.description as string;

        //{
        //    id: this.data.id,
        //    title: formModel.title as string
        //};

        return saveTodoEntry;
    }
}
