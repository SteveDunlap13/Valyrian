
import { Component, Output, EventEmitter } from '@angular/core';
import { ColourPicker } from './index'

@Component({
    selector: 'note-creator',
    templateUrl: './note-creator.html'
})
export class NoteCreator {

    @Output() createNote = new EventEmitter();
    colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];

    newNote = {
        title: '',
        value: '',
        color: 'white'
    }

    fullForm = false;

    onCreateNote() {
        const { title, value, color } = this.newNote;

        if (title && value) {
            this.createNote.emit({ title, value, color });
            this.reset();
        }
    }

    selectorColor(color: string) {
        this.newNote.color = color;
    }

    toggle(value: boolean) {
        this.fullForm = value;
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        }
    }
}
