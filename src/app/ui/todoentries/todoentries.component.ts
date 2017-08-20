
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TodoEntryService } from '../../services/index';
import { TodoGroup, TodoEntry } from '../../models/index';



@Component({
    selector: 'todoentries',
    templateUrl: 'todoentries.component.html',
    styleUrls: ['todoentries.component.scss']
})
export class TodoEntriesComponent implements OnChanges {

    @Input() todoGroup: TodoGroup;
    private todoEntries: TodoEntry[] = [];
    private refresh: Subject<any> = new Subject();


    constructor(private todoEntryService: TodoEntryService) { }

    ngOnChanges(changes: SimpleChanges) {

        this.fetchTodoEntries();
    }



    fetchTodoEntries(): void {

        if (this.todoGroup != null) {

            this.todoEntryService.getTodoEntries(this.todoGroup.id).subscribe(tdes => {
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

