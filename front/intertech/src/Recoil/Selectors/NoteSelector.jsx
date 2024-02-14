import { selectorFamily } from "recoil";
import { TasksState } from "../Atoms/TasksState";

export const NoteSelector = selectorFamily({
  key: 'NoteSelector',
  get: (id) => ({get}) => {
    const notes = get(TasksState);
    return notes.find(item => item.id == id);
  },
});