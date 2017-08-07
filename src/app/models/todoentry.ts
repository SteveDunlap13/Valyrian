
import { TodoEntryItem, TodoGroup } from './index';

export interface TodoEntry {

    id: number;
    group: TodoGroup;

    eventStart: Date;
    eventEnd: Date;
    isDone: boolean;

    title: string;
    description: string;

    items: TodoEntryItem[];
}
