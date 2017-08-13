
import { Component, OnChanges, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TodoEntryService } from '../../services/index';
import { TodoEntry } from '../../models/index';



@Component({
    selector: 'todoentries',
    templateUrl: 'todoentries.component.html'
})
export class TodoEntriesComponent implements OnChanges {

    @Input() groupId: number;
    private todoEntries: TodoEntry[] = [];
    private refresh: Subject<any> = new Subject();


    constructor(private todoEntryService: TodoEntryService) { }


    ngOnChanges(changes: any) {

        this.groupId = changes.groupId.currentValue;
        this.fetchTodoEntries();
    }


    fetchTodoEntries(): void {

        if (this.groupId != null) {

            this.todoEntryService.getTodoEntries(this.groupId).subscribe(tdes => {
                this.todoEntries = tdes;
                this.refresh.next();
            });
        }
    }
}
