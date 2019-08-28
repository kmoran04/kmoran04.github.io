import styled from 'styled-components';
import { AboutWrapper } from './aboutStyles';

export const ProjectsContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 1140px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const ProjectsPaddingWrapper = styled(AboutWrapper)`
    padding-bottom: 5vh;
    margin-bottom: 3vh;
`;