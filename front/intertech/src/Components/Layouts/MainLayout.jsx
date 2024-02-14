import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const MainLayout = () => {
    return (
        <StyledContent>
            <div>MainLayout</div>
            <Outlet />
        </StyledContent>
    )
}

export default MainLayout