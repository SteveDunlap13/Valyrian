
import { Component } from '@angular/core';
import { NoteCard, NoteCreator } from './index';

@Component({
    selector: 'notes-container',
    templateUrl: './notes.html'
})
export class Notes {

    notes = [
        { title: 'Meri gotvi', value: 'Clean room value', color: 'lightblue' },
        { title: 'Meri chisti', value: 'Clean room value', color: 'lightblue' },
        { title: 'Meri pere', value: 'Clean room value', color: 'lightblue' },
        { title: 'Meri gleda marti', value: 'Clean room value', color: 'lightblue' }
    ];

    onNoteChecked(note, i) {
        this.notes.splice(i, 1);
    }

    onCreateNote(note) {
        this.notes.push(note);
    }
}
