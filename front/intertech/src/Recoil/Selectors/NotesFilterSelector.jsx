import { selectorFamily } from "recoil";
import { TasksState } from "../Atoms/TasksState";

export const NotesFilterSelector = selectorFamily({
  key: 'NotesFilterSelector',
  get: (parametr) => ({get}) => {
    const items = get(TasksState);

    if(!parametr) 
        return items;

    return items.filter((item) =>{
        return  item.title.includes(parametr);
    })
  },
});