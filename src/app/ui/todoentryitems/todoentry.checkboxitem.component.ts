
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'checkbox-item',
    templateUrl: 'todoentry.checkboxitem.component.html',
    styleUrls: ['todoentry.checkboxitem.component.scss']
})
export class TodoEntryCheckboxItemComponent {

    @Input() text: string;
    @Input() isChecked: boolean;


    onChange(event) {

        this.isChecked = event.checked;
    }
}
