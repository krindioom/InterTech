import { selector } from "recoil";
import { TasksState } from "../Atoms/TasksState";

export const ListViewSelector = selector({
    key: 'ListViewSelector',
    get: ({ get }) => {
        const notesList = get(TasksState);

        const listViewNotes = notesList.map((item) => {
            const { id, title } = item;
            const partitial = { id, title };
            return partitial;
        });

        return listViewNotes;
    },
});