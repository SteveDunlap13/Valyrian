
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    templateUrl: './note-card.html'
})
export class NoteCard {

    @Input() note = {};
    @Output() checked = new EventEmitter();
    showCheck: Boolean = false;

    onChecked(event) {
        this.checked.emit(this.note);
    }

    toggle() {
        this.showCheck = !this.showCheck;
    }
}
