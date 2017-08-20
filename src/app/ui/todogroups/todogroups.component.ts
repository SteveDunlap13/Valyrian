
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdTabChangeEvent } from '@angular/material';

import { TodoGroupService } from '../../services/index';
import { TodoGroup } from '../../models/index';



@Component({
    selector: 'todogroups',
    styleUrls: ['todogroups.component.scss'],
    templateUrl: 'todogroups.component.html'
})
export class TodoGroupsComponent implements OnInit {

    private todoGroups: TodoGroup[];
    private selectedTodoGroup: TodoGroup;
    private group: TodoGroup;


    constructor(private todoGroupService: TodoGroupService) { }

    ngOnInit() {

        this.fetchTodoGroups();
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

        this.selectedTodoGroup = this.todoGroups[$event.index];
    }
}
