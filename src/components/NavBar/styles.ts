import styled from 'styled-components';
import { NavBarHeader } from '../../constants/titles';

export const NavBarWrapper = styled.div`
    background-color: ${props => props.theme.colors.NAV_BAR_BACKGROUND};
    height: 75px;
    display: flex;
    align-items: center;
    padding-left: 5vw;
    z-index: 5;
    transform: translate3d(0,0,0);
    position: sticky;
    top: 15px;
    box-shadow: 0px 1px 2px ${props => props.theme.colors.NAV_BAR_SHADOW_SAFARI};
    box-shadow: 0px 1px 2px ${props => props.theme.colors.NAV_BAR_SHADOW};
    @media (max-width: 414px) {
        position: fixed;
        top: 0px;
        width: 100vw;
        height: 50px;
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

