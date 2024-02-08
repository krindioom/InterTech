import { atom } from "recoil";

export const TasksState = atom({
    key: 'TasksState',
    default: [
        {
            id: 0,
            title: "title1",
        },
        {
            id: 1,
            title: "t2",
        },
        {
            id: 2,
            title: "t3",
        },
        {
            id: 3,
            title: "t4",
        },
        {
            id: 4,
            title: "t5",
        },
        {
            id: 5,
            title: "title1",
        },
        {
            id: 6,
            title: "t2",
        },
        {
            id: 7,
            title: "t3",
        },
        {
            id: 8,
            title: "t4",
        },
        {
            id: 9,
            title: "t5",
        },
    ],
});