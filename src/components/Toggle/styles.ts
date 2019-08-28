import styled from 'styled-components';
import { Sunrise, Sunset } from 'styled-icons/feather';

export const ToggleWrapper = styled.div`
    height: 5vw;
    margin-top: 2vw;
    z-index: 5;
    transform: translate3d(0,0,0);
    color: ${props => props.theme.colors.TOGGLE};
    &:hover {
        color: ${props => props.theme.colors.TOGGLE_HOVER};
        cursor: pointer;
    }
    @media (max-width: 800px) {
        height: 40px;
        margin-top: 0px;
    }
    
`;

export const DarkIcon = styled(Sunrise)`
    height: 2.5vw;
    z-index: 2;
    @media (max-width: 800px) {
        height: 40px;
    }
`;

export const LightIcon = styled(Sunset)`
    height: 2.5vw;
    @media (max-width: 800px) {
        height: 40px;
    }
`;
