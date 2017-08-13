
import { Component, OnInit } from '@angular/core';

import { TodoGroupService } from '../../services/index';
import { TodoGroup } from '../../models/index';



@Component({
    selector: 'todogroups',
    templateUrl: 'todogroups.component.html'
})
export class TodoGroupsComponent implements OnInit {

    private todoGroups: TodoGroup[] = [];
    private selectedGroupId;


    constructor(private todoGroupService: TodoGroupService) { }

    ngOnInit() {

        this.fetchTodoGroups();
    }

    fetchTodoGroups(): void {

        this.todoGroupService.getTodoGroups().subscribe(tgs => {
            this.todoGroups = tgs;
            if (tgs != null) {
                this.selectedGroupId = tgs[0].id;
            }
        });
    }

    changeGroup(e) {

        this.selectedGroupId = e.nextId;
    }
}
