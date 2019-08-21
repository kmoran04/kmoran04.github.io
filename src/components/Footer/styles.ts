import styled from 'styled-components';
import { TitleA } from '../../constants/titles';

export const FooterWrapper = styled.div`
    background-color: ${props => props.theme.colors.FOOTER_BACKGROUND};
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transform: translate3d(0,0,0);
`;

export const FooterText = styled(TitleA)`
    font-size: 1rem;
    color: ${props => props.theme.colors.FOOTER_TEXT};
    padding: 0;
`;