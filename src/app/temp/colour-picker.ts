
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-picker',
    templateUrl: './colour-picker.html'
})
export class ColourPicker {

    @Input() colors: Array<string> = [];
    @Output() selected = new EventEmitter();

    isSelectorVisible = false;

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }

    selectColor(event, color) {
        this.showSelector(false);
        this.selected.emit(color);
    }
}
