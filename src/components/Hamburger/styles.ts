import styled from 'styled-components';
import { Menu } from 'styled-icons/feather/Menu';
import { NavBarHeader } from '../../constants/titles';


export const HamburgerWrapper = styled.div`
    height: 75px;
    padding-top: 40px;
    padding-left: 3vw;
    z-index: 5;
    transform: translate3d(0,0,0);
    color: ${props => props.theme.colors.TOGGLE};
    &:hover {
        color: ${props => props.theme.colors.TOGGLE_HOVER};
        cursor: pointer;
    }
    @media (min-width: 800px) {
        display: none;
    }
`;

export const MenuWrapper = styled.div`
    padding-bottom: 5px;
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    align-content: left;
    background-color: ${props => props.theme.colors.NAV_BAR_BACKGROUND};
    box-shadow: 0px 1px 1px ${props => props.theme.colors.NAV_BAR_SHADOW_SAFARI};
    box-shadow: 0px 1px 1px ${props => props.theme.colors.NAV_BAR_SHADOW};
`;

export const HamburgerIcon = styled(Menu)`
    height: 35px;
    margin-right: 20px;
    color: ${props => props.theme.colors.NAV_BAR_HEADER};
`;

export const MenuItem = styled(NavBarHeader)`
    color: ${props => props.theme.colors.NAV_BAR_HEADER};
    font-size: 2rem;
    &:hover {
        color: ${props => props.theme.colors.NAV_BAR_HOVER};
        cursor: pointer;
    }
    @media (max-width: 995px) {
        font-size: 2.3vw;
    }
`;
