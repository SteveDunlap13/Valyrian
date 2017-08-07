
import { Component, OnInit } from '@angular/core';

import { GROOTS } from '../../shared/constants';

import { TodoGroupService, TodoEntryService } from '../../services/index';
import { Logger } from '../../services/logger.service';

import { TodoGroup, TodoEntry, TodoEntryItem } from '../../models/index';



@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.container.html'
})
export class DashboardContainer implements OnInit {

    title = 'Valyrian Todo App!';
    private todoGroups: TodoGroup[] = [];
    private todoEntries: TodoEntry[] = [];

    constructor(private todoEntryService: TodoEntryService,
                private todoGroupService: TodoGroupService,
                private logger: Logger) { }

    ngOnInit() {

        this.fetchTodoGroups();
        //this.fetchTodos();
    }

    fetchTodoGroups(): void {

        this.todoGroupService.getTodoGroups().subscribe(tgs => {
            this.todoGroups = tgs;
        });
    }
    fetchTodos(): void {

        this.todoEntryService.getTodoEntries().subscribe(tds => {
            this.todoEntries = tds
            //.map((tde: TodoEntry) => {
              //  return tde;
                /*<TodoEntry> {
                    id: tde.id,
                    eventStart: new Date(tde.eventStart),
                    eventEnd: new Date(tde.eventEnd),
                    isDone: tde.isDone,
                    title: tde.title,
                    description: tde.description,
                    items: tde.items
                }*/
            //});
        });
    }
}
