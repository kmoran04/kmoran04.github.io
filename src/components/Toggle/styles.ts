import styled from 'styled-components';
import { Sunrise, Sunset } from 'styled-icons/feather';
import * as OutlineMoon from 'styled-icons/fa-regular/Moon';
import * as SolidMoon from 'styled-icons/fa-solid/Moon';

export const ToggleWrapper = styled.div`
    height: 75px;
    padding-top: 40px;
    z-index: 5;
    transform: translate3d(0,0,0);
    color: ${props => props.theme.colors.TOGGLE};
    &:hover {
        color: ${props => props.theme.colors.TOGGLE_HOVER};
        cursor: pointer;
    }
    @media (max-width: 741px) {
    }
`;

export const DarkIcon = styled(Sunrise)`
    height: 30px;
    z-index: 2;
`;

export const LightIcon = styled(Sunset)`
    height: 30px;
`;

// export const DarkIcon = styled(OutlineMoon.Moon)`
//     height: 30px;
// `;

// export const LightIcon = styled(SolidMoon.Moon)`
//     height: 30px;
// `;