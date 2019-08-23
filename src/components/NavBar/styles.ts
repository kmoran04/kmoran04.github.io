import styled from 'styled-components';
import { NavBarHeader } from '../../constants/titles';

export const NavBarWrapper = styled.div`
    background-color: ${props => props.theme.colors.NAV_BAR_BACKGROUND};
    display: flex;
    height: 10vh;
    align-items: center;
    padding-left: 5vw;
    z-index: 5;
    transform: translate3d(0,0,0);
    margin-top: -10.5vh;
    box-shadow: 0px 1px 1px ${props => props.theme.colors.NAV_BAR_SHADOW};
    width: 100vw;
    position: sticky;
    top: 15px;
    @media (max-width: 414px) {
        position: fixed;
        top: 0px;
        width: 100vw;
        height: 50px;
    }

    @media (max-width: 1200px) {
        height: 10.5vh;
    }
`;

interface IMenuOptionProps {
    isActive: boolean;
};

export const MenuOption = styled(NavBarHeader)<IMenuOptionProps>`
    color: ${props => !props.isActive ? 
        `${props.theme.colors.NAV_BAR_HEADER}` :
        `${props.theme.colors.NAV_BAR_ACTIVE}`};
    margin-right: 2vw;
    @media (max-width: 1171px) {
        margin-right: 1.2vw;
    }
    &:hover {
        color: ${props => props.theme.colors.NAV_BAR_HOVER};
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

