import styled from 'styled-components';
import { Header, SocialFontHover, SocialFont, isFirefox } from '../../constants/titles';
import { LogoDefault, LogoEmphasis } from '../../components/TextLogo/styles';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';
import { Mail } from 'styled-icons/octicons/Mail';

const emailPadding = isFirefox ? `178px` : `190px`;
const emailTextMargin = isFirefox ? `-191px` : `-203px`;
const emailIconMargin = `-30px`;

const linkedinPadding = isFirefox ? `235px` : `260px`;
const linkedinTextMargin = isFirefox ? `-251px` : `-276px`;
const linkedinIconMargin = `-30px`;

export const LinkedinIcon = styled(Linkedin)`
    height: 50px;
    margin: auto;
    color: ${props => props.theme.colors.LINKEDIN};
    margin-bottom: 30px;
    @media (max-width: 626px) {
        margin: 0 auto;
        margin-right: 10px;
        margin-top: 2px;
    }
    @media (max-width: 414px) {
        height: 40px;
    }
`;

export const EmailIcon = styled(Mail)`
    height: 33px;
    padding: 5px 8px;
    margin: auto;
    background-color: ${props => props.theme.colors.EMAIL_BACKGROUND};
    color: ${props => props.theme.colors.EMAIL};
    border-radius: 5px;
    margin-bottom: 30px;
    @media (max-width: 626px) {
        margin: 0 auto;
        margin-right: 10px;
        margin-top: 3px;
    }
    @media (max-width: 414px) {
        height: 30px;
        padding: 3px 5px;
    }
`;

export const ContactHeader = styled(Header)`
    color: ${props => props.theme.colors.CONTACT_HEADER};
    margin-bottom: 50px;
`;

export const ContactMedium = styled.span`
    font-family: inherit;
    color: ${props => props.theme.colors.CONTACT_MEDIUM};
    font-size: 2rem;
    margin: 5px 3px;
    z-index: 0;
    transition: margin .4s;
    z-index: 2;
    @media (max-width: 626px) {
        display: none;
    }
`;

export const SocialLogoWrapper = styled.div`
    align-content: center;
    border-radius: 8px;
    transition: padding .4s;
    z-index: 1;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    @media (max-width: 626px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    margin-bottom: 10px;
`;

export const ContactInfoWrapper = styled.a`
    -webkit-transform: translateZ(0);
    margin: 0 25px;
    display: flex;
    align-content: center;
    flex-direction: row;
    border-radius: 3px;
    font-family: ${SocialFont};
    text-decoration: none;
    padding-bottom: 10px;
    transition: margin .4s, padding .4s;
    @media (max-width: 1120px) {
        margin: auto;
    }

    &:hover {
        cursor: pointer;
        font-family: ${SocialFontHover};

        @media (min-width: 626px) {
            ${LogoDefault} {
                color: ${props => props.theme.colors.LOGO_TEXT_HOVER};
            }
            ${LogoEmphasis} {
                color: ${props => props.theme.colors.LOGO_EMPHASIS_HOVER};
            }

            ${ContactMedium} {
                color: ${props => props.theme.colors.CONTACT_MEDIUM_HOVER};
                ${props => props.title === 'email' ?
                    `margin-left: ${emailTextMargin}` :
                    `margin-right: ${linkedinTextMargin}`};
            }
            ${SocialLogoWrapper} {
                background-color: ${props => props.theme.colors.LOGO_BACKGROUND_HOVER};
                ${props => props.title === 'email' ?
                    `padding-right: ${emailPadding}` :
                    `padding-left: ${linkedinPadding}`};           
            }
    };
    }
`;

export const SocialWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 1120px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;
