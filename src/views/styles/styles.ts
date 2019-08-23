import styled from 'styled-components';
import { TitleA, TitleB, TitleC, Header, isFirefox } from '../../constants/titles';

//LANDING PAGE WRAPPERS

export const WelcomeWrapper = styled(TitleA)`
    padding-top: ${isFirefox ? `30vh` : `25vh`};
    z-index: 0;
    transform: translate3d(0,0,0);
    background-color: ${props => props.theme.colors.TITLE_BACKGROUND};
    color: ${props => props.theme.colors.TITLE_TEXT};
    position: sticky;
    top: 0px;
    width: 100vw;

    @media (max-width: 833px) {
        font-size: 100px;
    }

    @media (max-width: 414px) {
        padding-top: 44vh;
        font-size: 65px;
        position: relative;
    }
`;

export const SecondaryWrapper = styled(TitleB)`
    background-color: ${props => props.theme.colors.SUBTITLE_BACKGROUND};
    color: ${props => props.theme.colors.TITLE_TEXT};
    z-index: 1;
    transform: translate3d(0,0,0);
    position: sticky;
    top: 5px;
    padding-top: 1vh;
    padding-bottom: 1vh;
    width: 100vw;
    @media (max-width: 833px) {
        font-size: 60px;
    }
    @media (max-width: 414px) {
        padding-top: 2vh;
        padding-bottom: 2vh;
        font-size: 35px;
        position: relative;
        margin-top: -10px;
    }
`;



export const ClosingWrapper = styled(TitleC)`
    background-color: ${props => props.theme.colors.ACCENT_BACKGROUND};
    color: ${props => props.theme.colors.TITLE_TEXT};
    z-index: 3;
    transform: translate3d(0,0,0);
    position: sticky;
    top: 5px;
    padding-top: 1vh;
    padding-bottom: 1vh;
    border-top: 5px solid ${props => props.theme.colors.SUBTITLE_BACKGROUND};
    width: 100vw;
    @media (max-width: 833px) {
        font-size: 40px;
    }
    @media (max-width: 414px) {
        padding-top: 2vh;
        padding-bottom: 2vh;
        font-size: 30px;
        position: relative;
    }
`;

export const LandingPage = styled.div`
    background-color: ${props => props.theme.colors.PAGE_BACKGROUND};
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Parallax = styled.div`
    background-color: ${props => props.theme.colors.PAGE_BACKGROUND};
    transform: translate3d(0,0,0);
    z-index: 2;
    flex: 1 1 auto;
`;

export const Filler = styled.div`
    background-color: ${props => props.theme.colors.PAGE_BACKGROUND};
    border-top: 5px solid ${props => props.theme.colors.ACCENT_BACKGROUND};
    z-index: 3;
    height: 11vh;
    position: sticky;
    top: 15px;
`;

export const TopBorder = styled.div`
    background-color: ${props => props.theme.colors.TITLE_BACKGROUND};
    position: fixed;
    top: 0px;
    width: 100%;
    height: 5px;
    z-index: 10;
    color: ${props => props.theme.colors.TITLE_TEXT};
    transform: translate3d(0,0,0);
    width: 100vw;
    @media (max-width: 414px) {
        display: none;
    }
`;

//PAGE WRAPPERS
export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`;

export const HomeWrapper = styled.div`
    background-color: ${props => props.theme.colors.PAGE_BACKGROUND};
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    z-index: 2;
    background-color: ${props => props.theme.colors.PAGE_BACKGROUND};
`;

export const ProjectsWrapper = styled.div`
    padding-top: 15vh;
    z-index: 2;
    background-color: ${props => props.theme.colors.PAGE_BACKGROUND};
    transform: translate3d(0,0,0);
    width: 80vw;
    margin: auto;
    min-height: 100vh;
`;

export const PathWrapper = styled(ProjectsWrapper)`

`;

export const AboutMeWrapper = styled(ProjectsWrapper)`
`;

export const EducationWrapper = styled(ProjectsWrapper)`
    padding-bottom: 15vh;
`;

export const ContactWrapper = styled(ProjectsWrapper)`
    background-color: ${props => props.theme.colors.CONTACT_BACKGROUND};
    min-height: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 50px 0px 50px;
    width: 100vw;
`;

//PAGE ELEMENTS
export const PageHeader = styled(Header)`
    color: ${props => props.theme.colors.HEADER_TEXT};
    margin: 0 auto;
`;

export const MainLogoWrapper = styled.div`
    position: fixed;
    right: 22px;
    top: 25px;
    z-index: 6;
    transform: translate3d(0,0,0);
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 414px) {
        top: 5px;
        right: 0px;
    }
`;


export const OffsetAnchor = styled.a`
    margin-bottom: 70px;
    display: block;
`;
