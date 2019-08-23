import styled from "styled-components";
import { ProjectPreviewText } from "../../constants/titles";

export const ProjectPreviewOverlay = styled.div`
    display: inline;
    position: absolute;
    padding: 50px 7vw;
    color:  ${props => props.theme.colors.PROJECT_PREVIEW_OVERLAY_TEXT};
    font-family: ${ProjectPreviewText};
    font-size: 2.5vw;
    width: 30vw;
    text-align: center;
    transition: display .3s;
    text-shadow: 2px 2px ${props => props.theme.colors.PROJECT_PREVIEW_TEXT_SHADOW};
`;

export const ProjectPhoto = styled.img`
    height: auto;
    width: 45vw;
    overflow: hidden;
    filter: blur(.2vw);
    transition: .3s ease;
    border-radius: 15px;
    opacity: .5;
    
`;

export const ProjectPreviewWrapper = styled.a`
    position: relative;
    width: 45vw;

    border-radius: 20px;
    border: 5px solid ${props => props.theme.colors.PROJECT_PREVIEW_BORDER};
    margin-left: 4vw;
    margin-top: 5vh;
    background-color: ${props => props.theme.colors.PROJECT_PREVIEW_OVERLAY};
    display: flex;
    align-content: center;
    &:hover {
        ${ProjectPreviewOverlay} {
            display: none;
        }
        ${ProjectPhoto} {
            opacity: 1;
            filter: blur(0);
        }
    }
`;

