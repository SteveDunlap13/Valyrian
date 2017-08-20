
import { TodoGroup, TodoEntry, TodoEntryItem } from './index';



function getRandomDate() {

    let from = new Date(2017, 1, 1, 0, 0, 0);
    let to = new Date(2017, 12, 31, 0, 0, 0);

    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}



export let TODOGROUPS: TodoGroup[] = [

    { id: 4, title: 'Current', icon: 'timeline', description: 'Current items' },
    { id: 2, title: 'Private', icon: 'lock', description: '' },
    { id: 66, title: 'Projects', icon: 'apps', description: 'Ongoing project notes' }

];

export let TODOENTRYITEMS: TodoEntryItem[] = [

    {
        id: 12,
        data: 'sample data item 1',
        isDone: false
    },
    {
        id: 20,
        data: 'sample data item 2',
        isDone: true
    },
    {
        id: 30,
        data: 'sample data item 3',
        isDone: false
    }
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
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

        items: TODOENTRYITEMS
    }
];
