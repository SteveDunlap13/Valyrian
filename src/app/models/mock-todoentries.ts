
import { TodoGroup, TodoEntry, TodoEntryItem } from './index';

export let TODOENTRIES: TodoEntry[] = [

    {
        id: 1,
        group: { id: 1, title: 'Group A', description: 'Group A description' },

        eventStart: new Date(),
        eventEnd: new Date(),
        isDone: false,

        title: 'Sample Title A',
        description: 'Sample description for Todo A',

        items: [
            {
                id: 1,
                data: 'sample data item 1'
            },
            {
                id: 2,
                data: 'sample data item 2'
            },
            {
                id: 3,
                data: 'sample data item 3'
            }
        ]
    },
    {
        id: 2,
        group: { id: 2, title: 'Group B', description: 'Group B description' },

        eventStart: new Date(),
        eventEnd: new Date(),
        isDone: false,

        title: 'Sample Title B',
        description: 'Sample description for Todo B',

        items: [
            {
                id: 1,
                data: 'sample data item 1'
            },
            {
                id: 2,
                data: 'sample data item 2'
            },
            {
                id: 3,
                data: 'sample data item 3'
            }
        ]
    },
    {
        id: 3,
        group: { id: 3, title: 'Group C', description: 'Group C description' },

        eventStart: new Date(),
        eventEnd: new Date(),
        isDone: true,

        title: 'Sample Title C',
        description: 'Sample description for Todo C',

        items: [
            {
                id: 1,
                data: 'sample data item 1'
            },
            {
                id: 2,
                data: 'sample data item 2'
            },
            {
                id: 3,
                data: 'sample data item 3'
            }
        ]
    }
];
