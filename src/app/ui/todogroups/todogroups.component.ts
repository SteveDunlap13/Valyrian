
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MdTabChangeEvent } from '@angular/material';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { TodoGroupService } from '../../services/index';
import { TodoGroup } from '../../models/index';



@Component({
    selector: 'todogroups',
    styleUrls: ['todogroups.component.scss'],
    templateUrl: 'todogroups.component.html'
})
@AutoUnsubscribe()
export class TodoGroupsComponent implements OnInit, OnDestroy {

    private todoGroups: TodoGroup[];
    private selectedTodoGroup: TodoGroup;
    private group: TodoGroup;


    constructor(private todoGroupService: TodoGroupService) { }

    ngOnInit() {

        this.fetchTodoGroups();
    }
    ngOnDestroy() {
    }



    fetchTodoGroups(): void {

        this.todoGroupService.getTodoGroups().subscribe(tgs => {
            this.todoGroups = tgs;
            if (tgs != null) {
                this.selectedTodoGroup = tgs[0];
            }
        });
    }

    onSelect($event: MdTabChangeEvent) {

        // TODO: tell child todo entries to clear its array, new data coming...

        this.selectedTodoGroup = this.todoGroups[$event.index];
    }
}
