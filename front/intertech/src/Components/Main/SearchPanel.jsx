import Search from 'antd/es/input/Search'
import React, { useEffect } from 'react'
import { NoteFilterTextState } from '../../Recoil/Atoms/NoteFilterTextState';
import { useRecoilValue, useSetRecoilState } from 'recoil';


const SearchPanel = () => {

    const setFilterWord = useSetRecoilState(NoteFilterTextState);

    return (
        <input
            placeholder='введите фильтр поиска'
            type='text'
            onChange={(e) => {
                setFilterWord(e.target.value);
            }}
        />
    )
}

export default SearchPanel