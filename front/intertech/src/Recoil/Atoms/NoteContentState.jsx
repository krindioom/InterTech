import { atom } from "recoil";

export const NoteContentState = atom({
  key: 'NoteContentState',
  default: {
    type:"",
    content: ""
  },
});