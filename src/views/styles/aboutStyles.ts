import styled from 'styled-components';
import { Header, DatesFont, BodyFont } from '../../constants/titles';

export const ResumeItemTitle = styled(Header)`
    margin-left: 4vw;
    font-size: 2rem;
    color: ${props => props.theme.colors.RESUME_ITEM_TITLE};
    @media (max-width: 800px) {
        font-size: 1.3rem;
    }
`;

export const ResumeItemSubtitle = styled(ResumeItemTitle)`
    font-size: 1.8rem;
    color: ${props => props.theme.colors.RESUME_ITEM_SUBTITLE};
    @media (max-width: 800px) {
        font-size: 1.2rem;
    }
`;

export const ResumeItemDate = styled(ResumeItemSubtitle)`
    font-family: ${DatesFont};
`;

export const ResumeItemInfo = styled(ResumeItemSubtitle)`
    font-family: ${BodyFont};
    padding-bottom: 5vh;
`;

export const ResumeBullet = styled.li`
    font-size: 1.6rem;
    @media (max-width: 800px) {
        font-size: 1rem;
    }
`;

export const Paragraph = styled(ResumeItemInfo)`
    font-size: 1.6rem;
`;

export const AboutWrapper = styled.div`
    margin-top: 5vh;
    border-left: 5px solid ${props => props.theme.colors.SIDEBAR};
    text-align: left;
    margin-right: 10vh;
`;

export const PhotoBox = styled.div`
    width: 38vw;

    @media (max-width: 800px) {
        margin: auto;
    }
`;

export const Photo = styled.img`
    width: 38%;
    height: 38%;
    box-shadow: 20px 20px ${props => props.theme.colors.PHOTO_SHADOW};
    margin-left: 4vw;

    margin-bottom: 10vh;
    @media (max-width: 1000px) {
        width: 38vw;
        margin: auto;
    }

    
`;

export const PhotoWrapper = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;