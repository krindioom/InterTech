import { atom } from "recoil";

export const TasksState = atom({
    key: 'TasksState',
    default: [
        {
            id: 0,
            title: "title1",
            type: "text",
            content: {
                text: "huge text",
            }
        },

        {
            id: 1,
            title: "title2",
            type: "contentRef",
            content: {
                url: "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707782400&semt=sph",
            }
        },
    ],
});