import { atom } from "recoil";

export const TasksState = atom({
    key: 'TasksState',
    default: [
        {
            id: 0,
            title: "title1",
            text: "большой текст",
        },
        {
            id: 1,
            title: "t2",
            text: "большой текст",
        },
        {
            id: 2,
            title: "t3",
            text: "большой текст",
        },
        {
            id: 3,
            title: "t4",
            text: "большой текст",

        },
        {
            id: 4,
            title: "t5",
            text: "большой текст",

        },
        {
            id: 5,
            title: "title1",
            text: "большой текст",

        },
        {
            id: 6,
            title: "t2",
            text: "большой текст",

        },
        {
            id: 7,
            title: "t3",
            text: "большой текст",

        },
        {
            id: 8,
            title: "t4",
            text: "большой текст",

        },
        {
            id: 9,
            title: "t5",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis ducimus assumenda culpa omnis iusto architecto minima distinctio? Nesciunt, cum. Iusto, voluptatibus neque nobis ipsa eligendi excepturi qui praesentium dolor?",
        },
    ],
});