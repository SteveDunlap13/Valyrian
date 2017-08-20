
import { Component, OnInit, ViewChild } from '@angular/core';

import { TodoGroupService } from '../../services/index';
import { TodoGroup } from '../../models/index';



@Component({
    selector: 'todogroups',
    styleUrls: ['todogroups.component.scss'],
    templateUrl: 'todogroups.component.html'
})
export class TodoGroupsComponent implements OnInit {

    private todoGroups: TodoGroup[] = [];
    private selectedGroupId = 1;
    //@ViewChild('starkTabGroup') starkTabGroup;


    constructor(private todoGroupService: TodoGroupService) { }

    ngOnInit() {

        this.fetchTodoGroups();
        //this.selectedIndex = 1;
    }



    fetchTodoGroups(): void {

        this.todoGroupService.getTodoGroups().subscribe(tgs => {
            this.todoGroups = tgs;
            if (tgs != null) {
                this.selectedGroupId = tgs[0].id;
            }
        });
    }

    onSelect($event: any) {

        this.selectedGroupId = $event.index + 1;
    }
}
