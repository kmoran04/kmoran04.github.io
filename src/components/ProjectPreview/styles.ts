import styled from "styled-components";
import { ProjectPreviewText } from "../../constants/titles";

export const ProjectPreviewOverlay = styled.div`
    display: none;
    position: absolute;
    padding: 50px 20px;
    color:  ${props => props.theme.colors.PROJECT_PREVIEW_OVERLAY_TEXT};
    font-family: ${ProjectPreviewText};
    font-size: 1.5rem;
    text-align: center;
    transition: display .3s;
    text-shadow: 2px 2px ${props => props.theme.colors.PROJECT_PREVIEW_TEXT_SHADOW};
`;

export const ProjectPhoto = styled.img`
    height: 15rem;
    width: 100%;
    overflow: hidden;
    filter: blur(1px);
    transition: .3s ease;
    border-radius: inherit;
    
`;

export const ProjectPreviewWrapper = styled.a`
    position: relative;
    border-radius: 5px;
    margin-left: 4vw;
    margin-top: 5vh;
    background-color: ${props => props.theme.colors.PROJECT_PREVIEW_OVERLAY};
    display: flex;
    align-content: center;
    &:hover {
        ${ProjectPreviewOverlay} {
            display: inline;
        }
        ${ProjectPhoto} {
            opacity: .5;
        }
    }
`;

