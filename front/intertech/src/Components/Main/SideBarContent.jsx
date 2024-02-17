import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { TasksState } from "../../Recoil/Atoms/TasksState";
import { json } from "react-router-dom";

const StyledSideBarContent = styled.div`
    width: 100%;
    background: #000;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledSideImage = styled.img`
    width: calc(80% - 20px);
    height: 70%;
`;

const StyledStatsNav = styled.nav`
    span {
        color: red;
    }
`;

const SideBarContent = () => {
    const tdRef = useRef({});
    const notesList = useRecoilValue(TasksState);
    const [count, setCount] = useState(0);
    const [liTitles, setLiTitles] = useState([]);
    const calculateNotesCount = () => {
        return {
            notes: notesList,
            count: notesList.length,
        };
    };

    useEffect(() => {
        setCount(calculateNotesCount().count);
    }, []);

    const getTableValues = () => {
        if (!tdRef.current) return;

        const elements = tdRef.current.querySelectorAll("td");
        setLiTitles(Array.from(elements));

    };

    console.log(JSON.stringify(calculateNotesCount()));

    return (
        <StyledSideBarContent>
            <table border="1">
                <thead onClick={() => getTableValues()}>
                    <tr>
                        <th>Студент</th>
                        <th>Группа</th>
                        <th>Зачётная книжка</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ref={tdRef}>
                        <td>Падерин Кирилл</td>
                        <td>КИ21-09Б</td>
                        <td>032156540</td>
                    </tr>
                </tbody>
            </table>

            <picture>
                <source
                    media="(max-width: 575px)"
                    srcSet="../../../public/pngwing.com.png"
                />
                <StyledSideImage
                    className="logo"
                    src="../../../public/icelogo.png"
                    alt="logo"
                />
            </picture>

            <StyledStatsNav>
                <h4>
                    <span>Моя</span> статистика
                </h4>
                <ul>
                    <li>{`Записок: ${count}`}</li>
                    {
                        liTitles.map((item, index) => {
                            return (<li key={index}>{item.textContent}</li>)
                        })
                    }
                </ul>
            </StyledStatsNav>
        </StyledSideBarContent>
    );
};

export default SideBarContent;
