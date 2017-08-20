
import { Component, Input } from '@angular/core';
import { MdCheckboxChange } from '@angular/material'

@Component({
    selector: 'checkbox-item',
    templateUrl: 'todoentry.checkboxitem.component.html',
    styleUrls: ['todoentry.checkboxitem.component.scss']
})
export class TodoEntryCheckboxItemComponent {

    @Input() data: string;
    @Input() isChecked: boolean;


    onChange($event: MdCheckboxChange) {

        this.isChecked = $event.checked;
    }
}
