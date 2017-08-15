
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TodoEntryService } from '../../services/index';
import { TodoEntry, TodoEntryItem } from '../../models/index';



@Component({
    selector: 'todoentries',
    templateUrl: 'todoentries.component.html'
})
export class TodoEntriesComponent implements OnInit, OnChanges {

    @Input() groupId: number;
    private todoEntries: TodoEntry[] = [];
    private refresh: Subject<any> = new Subject();


    constructor(private todoEntryService: TodoEntryService) { }


    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {

        this.groupId = changes.groupId.currentValue;
        this.fetchTodoEntries();
    }


    fetchTodoEntries(): void {

        if (this.groupId != null) {

            this.todoEntryService.getTodoEntries(this.groupId).subscribe(tdes => {
                this.todoEntries = tdes.sort(this.sortByLastUpdatedDesc);
                this.refresh.next();
            });
        }
    }

    sortByLastUpdatedDesc(tde1: TodoEntry, tde2: TodoEntry) {

        if (tde1.lastUpdated > tde2.lastUpdated) {
            return -1;
        } else if (tde1.lastUpdated < tde2.lastUpdated) {
            return 1;
        } else {
            return 0;
        }
    }
}

