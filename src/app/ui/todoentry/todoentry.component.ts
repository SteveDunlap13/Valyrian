
import { Component, Input } from '@angular/core';
//import { FormControl } from '@angular/forms';

import { TodoEntryService } from '../../services/index';
import { TodoEntry } from '../../models/index';



@Component({
    selector: 'todoentry',
    templateUrl: 'todoentry.component.html',
    styleUrls: ['todoentry.component.scss']
})
export class TodoEntryComponent {

    @Input() todoEntry: TodoEntry;
}
