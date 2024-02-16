import { atom } from "recoil";

export const NoteTypesState = atom({
  key: 'NoteTypesState',
  default: {
    text: "text",
    contentRef: "contentRef",
  },
});