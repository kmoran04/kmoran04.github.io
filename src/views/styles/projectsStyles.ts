import styled from 'styled-components';

export const ProjectsContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 1140px) {
        flex-direction: column;
        flex-wrap: wrap;
        width: 500px;
    }
`;