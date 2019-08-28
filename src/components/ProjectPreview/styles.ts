import styled from "styled-components";
import { ProjectPreviewText } from "../../constants/titles";

export const ProjectPreviewOverlay = styled.div`
    display: inline;
    position: absolute;
    padding: 2vw 5vw;
    color:  ${props => props.theme.colors.PROJECT_PREVIEW_OVERLAY_TEXT};
    font-family: ${ProjectPreviewText};
    font-size: 1.5vw;
    width: 20vw;
    text-align: center;
    transition: display .3s;
    text-shadow: 2px 2px ${props => props.theme.colors.PROJECT_PREVIEW_TEXT_SHADOW};
    @media (max-width: 414px) {
        padding: 12vw;
        display: none;
    }
`;

export const ProjectPhoto = styled.img`
    height: auto;
    width: 30vw;
    overflow: hidden;
    filter: blur(.2vw);
    transition: .3s ease;
    border-radius: 15px;
    opacity: .5;
    @media (max-width: 414px) {
        height: 20vh;
        width: 50vw;
        opacity: 1;
        filter: blur(0);
    }
`;

export const ProjectPreviewWrapper = styled.a`
    position: relative;
    width: 30vw;
    height: 18vw;
    border-radius: 20px;
    border: 5px solid ${props => props.theme.colors.PROJECT_PREVIEW_BORDER};
    margin-left: 4vw;
    margin-top: 5vh;
    background-color: ${props => props.theme.colors.PROJECT_PREVIEW_OVERLAY};
    display: flex;
    align-content: center;
    @media (max-width: 414px) {
        width: 50vw;
        height: 20vh;
        
    }
    @media (min-width: 414px) {
    &:hover {
        ${ProjectPreviewOverlay} {
            display: none;
        }
        ${ProjectPhoto} {
            opacity: 1;
            filter: blur(0);
        }
    }
    }
`;

export const ProjectOverlayMobile = styled.div`
    display: none;
    font-family: ${ProjectPreviewText};
    font-size: 2.5vw;
    margin-left: 4vw;
    margin-top: 2vh;
    color: ${props => props.theme.colors.PROJECT_PREVIEW_BORDER};
    @media (max-width: 414px) {
        display: block;
    }

`;
