
import { Component, OnInit, Input } from '@angular/core';

import { TodoEntryService } from '../../services/index';
import { TodoEntry } from '../../models/index';



@Component({
    selector: 'todoentry',
    templateUrl: 'todoentry.component.html',
    styleUrls: ['todoentry.component.scss']
})
export class TodoEntryComponent implements OnInit {

    @Input() id: number;
    public todoEntry: TodoEntry;
    private activeIndex = -1;

    constructor(private todoEntryService: TodoEntryService) { }

    ngOnInit() {

        this.fetchTodoEntry();
    }

    fetchTodoEntry(): void {

        if (this.id != null) {

            this.todoEntryService.getTodoEntry(this.id).subscribe(tde => {
                this.todoEntry = tde;

                //console.log('todoEntry id: ' + this.id);
                //console.log('todoEntryService.getTodoEntry result:' + JSON.stringify(tde));
            });
        }
    }
}
