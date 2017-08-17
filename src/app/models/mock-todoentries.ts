
import { TodoGroup, TodoEntry, TodoEntryItem } from './index';



function getRandomDate() {

    let from = new Date(2017, 1, 1, 0, 0, 0);
    let to = new Date(2017, 12, 31, 0, 0, 0);

    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}



export let TODOGROUPS: TodoGroup[] = [

    { id: 1, title: 'Current', description: 'Current items' },
    { id: 2, title: 'Private', description: '' },
    { id: 3, title: 'Projects', description: 'Ongoing project notes' }

];


export let TODOENTRIES: TodoEntry[] = [

    {
        id: 1,
        group: TODOGROUPS[0],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title A1',
        description: 'Sample description for Todo A in Group A',

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
        group: TODOGROUPS[0],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title B2',
        description: 'Sample description for Todo B in Group A',

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
            },
            {
                id: 4,
                data: 'sample data item 3'
            },
            {
                id: 5,
                data: 'sample data item 3'
            }
        ]
    },
    {
        id: 3,
        group: TODOGROUPS[0],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: true,

        title: 'Sample Title C1',
        description: 'Sample description for Todo C in Group C',

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
        id: 4,
        group: TODOGROUPS[1],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title C3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        description: 'Sample description for Todo B in Group A',

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
        id: 5,
        group: TODOGROUPS[1],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title D4',
        description: 'Sample description for Todo B in Group A',

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
        id: 6,
        group: TODOGROUPS[1],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title E5',
        description: 'Sample description for Todo B in Group A',

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
        id: 7,
        group: TODOGROUPS[2],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title F6',
        description: 'Sample description for Todo B in Group A',

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
        id: 8,
        group: TODOGROUPS[2],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title G8',
        description: 'Sample description for Todo B in Group A',

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
        id: 9,
        group: TODOGROUPS[2],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title H9',
        description: 'Sample description for Todo B in Group A',

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
        id: 10,
        group: TODOGROUPS[0],

        eventStart: new Date(),
        eventEnd: new Date(),
        lastUpdated: getRandomDate(),
        isDone: false,

        title: 'Sample Title M34',
        description: 'Sample description for Todo B in Group A',

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
