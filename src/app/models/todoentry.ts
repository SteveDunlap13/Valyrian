
import { TodoEntryItem, TodoGroup } from './index';

export interface TodoEntry {

    id: number;
    group: TodoGroup;

    eventStart: Date;
    eventEnd: Date;
    lastUpdated: Date;
    isDone: boolean;

    title: string;
    description: string;
    imageTitle?: string;
    imageUrl?: string;

    items: TodoEntryItem[];
}
