
import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { TodoEntry } from '../../models/index';


@Component({
    selector: 'todoentry-dialog',
    templateUrl: 'todoentry-dialog.component.html',
})
export class TodoEntryDialog implements OnInit, OnChanges {

    private todoEntryForm: FormGroup;


    constructor( @Inject(MD_DIALOG_DATA) public data: TodoEntry,
        private fb: FormBuilder,
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
            title: this.data.title,
            description: this.data.description
        });
    }

    submit() {

        this.dialogRef.close();
    }
}
