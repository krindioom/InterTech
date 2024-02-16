import { useSetRecoilState } from 'recoil';
import { IsDrawerCloseState } from '../Recoil/Atoms/IsDrawerCloseState';
import styled from 'styled-components';

const FitedDiv = styled.div`
    width:fit-content;
`;

const Closer = ({ children }) => {
    const setIsClose = useSetRecoilState(IsDrawerCloseState);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsClose(false);
    };

    return <FitedDiv onClick={handleClick}>{children}</FitedDiv>;
};

export default Closer;
