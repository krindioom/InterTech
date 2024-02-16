import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NoteContentState } from "../Recoil/Atoms/NoteContentState";
import { TasksState } from "../Recoil/Atoms/TasksState";

const useSaveNote = ({title}) => {
    const content = useRecoilValue(NoteContentState);

    const [notesList, setNotesList] = useRecoilState(TasksState);

    const noteTemplate = {
        id: notesList.length,
        title: title,
        content: {},
    };

    useEffect(() => {
        console.log(title);
        noteTemplate.title = title;
        noteTemplate.content = content;
    }, [content, title]);

    const save = () => {
        if(!noteTemplate.content.content)
            return;

        if(!noteTemplate.title)
            return;
        console.log(noteTemplate.content)
        setNotesList(curent => [...curent, noteTemplate]);
    };

    return save;
};

export default useSaveNote;
