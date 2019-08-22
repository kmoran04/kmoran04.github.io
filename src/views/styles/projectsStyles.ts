import styled from 'styled-components';
import { AboutWrapper } from './aboutStyles';

export const ProjectsContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 1140px) {
        flex-direction: column;
        flex-wrap: wrap;
        width: 500px;
    }
`;

export const ProjectsPaddingWrapper = styled(AboutWrapper)`
    padding-bottom: 5vh;
    margin-bottom: 3vh;
`;