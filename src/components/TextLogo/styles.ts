import styled from 'styled-components';
import { LogoFont } from '../../constants/titles';


export const LogoDefault = styled.span`
    font-family: ${LogoFont};
    font-size: 2rem;
    color: ${props => props.theme.colors.LOGO_TEXT};
    @media (max-width: 414px) {
        font-size: 1.5rem;
    }
`;

export const LogoEmphasis = styled(LogoDefault)`
    color: ${props => props.theme.colors.LOGO_EMPHASIS};
`;

export const LogoWrapper = styled.div`
    padding: 4px 16px;
    border-radius: 8px;
    display: inline-block;
    background-color: ${props => props.theme.colors.LOGO_BACKGROUND_SAFARI};
    background-color: ${props => props.theme.colors.LOGO_BACKGROUND};
    &:hover {
        background-color: ${props => props.theme.colors.LOGO_BACKGROUND_HOVER};
        ${LogoDefault} {
            color: ${props => props.theme.colors.LOGO_TEXT_HOVER};
        }
        ${LogoEmphasis} {
            color: ${props => props.theme.colors.LOGO_EMPHASIS_HOVER};
        }
    } 
`;