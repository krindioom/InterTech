import React from 'react'
import NoteContentWrapper from './NoteContentWrapper';
import styled from 'styled-components';

const StyledView = styled.div`
    width:100%;
`

const NoteView = () => {

    //const view = useRecoilValue(NoteSelector(id));

    return (
        <StyledView>
            <NoteContentWrapper/>
        </StyledView>
    )
}

export default NoteView