
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TODOENTRIES, TodoGroup, TodoEntry } from '../models/index';


export class InMemoryApiService implements InMemoryDbService {

  createDb() {

    let todoentries = TODOENTRIES;

    let todogroups = TODOENTRIES.map((tde: TodoEntry) => {
      return tde.group;
    });

    return { todoentries, todogroups };
  }
}
