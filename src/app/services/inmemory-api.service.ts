
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TODOENTRIES, TODOGROUPS, TodoGroup, TodoEntry } from '../models/index';


export class InMemoryApiService implements InMemoryDbService {

  createDb() {

    let todoentries = TODOENTRIES;

    let todogroups = TODOGROUPS;

    return { todoentries, todogroups };
  }
}
