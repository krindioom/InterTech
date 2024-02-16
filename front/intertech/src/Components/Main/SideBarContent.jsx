import React from "react";
import styled from "styled-components";

const StyledSideBarContent = styled.div`
    width: 100%;
    background: #000;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledSideImage = styled.img`
    width:80%;
    height:70%;
`;

const SideBarContent = () => {
    return (
        <StyledSideBarContent>
            <table border="1">
                <thead>
                    <tr>
                        <th>Студент</th>
                        <th>Группа</th>
                        <th>Зачётная книжка</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Падерин Кирилл</td>
                        <td>КИ21-09Б</td>
                        <td>032156540</td>
                    </tr>
                </tbody>
            </table>

            <picture>
                <source media="(max-width: 575px)" srcSet="../../../public/pngwing.com.png" />
                <StyledSideImage className="logo" src="../../../public/icelogo.png" alt="logo" />
            </picture>
        </StyledSideBarContent>
    );
};

export default SideBarContent;
