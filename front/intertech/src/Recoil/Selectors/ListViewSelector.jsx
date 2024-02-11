import { selector } from "recoil";
import { TasksState } from "../Atoms/TasksState";
import { ListFilterSelector } from "./ListFilterSelector";
import { NoteFilterTextState } from "../Atoms/NoteFilterTextState";

export const ListViewSelector = selector({
    key: 'ListViewSelector',
    get: ({ get }) => {
        const filter = get(NoteFilterTextState);
        
        const notesList = get(ListFilterSelector(filter));
        console.log(notesList);
        const listViewNotes = notesList.map((item) => {
            const { id, title } = item;
            const partitial = { id, title };
            return partitial;
        });

        return listViewNotes;
    },
});