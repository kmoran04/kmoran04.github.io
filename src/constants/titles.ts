import styled from 'styled-components';

const findFirefox = () => {
    return navigator.userAgent.indexOf('Firefox') != -1;
  };

export const isFirefox = findFirefox();

const PRIMARY_FONT_BOLD_Firefox = 'Proxima Nova Extrabold';
const PRIMARY_FONT_REGULAR_Firefox = 'Proxima Nova';
const PRIMARY_FONT_ITALIC_Firefox = 'Proxima Nova; font-style: italic';



const PRIMARY_FONT_BOLD = 'AvenirNext-Bold';
const PRIMARY_FONT_DEMIBOLD = 'AvenirNext-DemiBold';
const PRIMARY_FONT_REGULAR = 'AvenirNext-Regular';
const PRIMARY_FONT_ITALIC = 'AvenirNext-Italic';

export const TitleA = styled.div`
    padding-left: 5vw;
    font-family: ${isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD};
    font-size: 10vw;
    &:hover{
        cursor: default;
    }
`;

export const TitleB = styled.div`
    padding-left: 5vw;
    font-family: ${isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD};
    font-size: 5vw;
    &:hover{
        cursor: default;
    }
`;

export const TitleC = styled.div`
    padding-left: 5vw;
    font-family: ${isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD};
    font-size: 3.5vw;
    &:hover{
        cursor: default;
    }
`;

export const NavBarHeader = styled.button`
font-family: ${isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD};
font-size: 1.5vw;
    text-decoration: none;
    background: none;
    border: none !important;
    @media (max-width: 1121px) {
        font-size: 1.2rem;
    }
    @media (max-width: 995px) {
        font-size: .8rem;
    }
`;

export const Header = styled.div`
font-family: ${isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD};
font-size: 3rem;
@media (max-width: 800px) {
    font-size: 2.3rem;
}
    @media (max-width: 414px) {
        font-size: 2rem;
    }
`;

export const LogoFont = isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD;
export const SocialFontHover = isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD;
export const SocialFont = isFirefox ? PRIMARY_FONT_REGULAR_Firefox : PRIMARY_FONT_REGULAR;
export const DatesFont = isFirefox ? PRIMARY_FONT_ITALIC_Firefox : PRIMARY_FONT_ITALIC;
export const BodyFont = isFirefox ? PRIMARY_FONT_REGULAR_Firefox : PRIMARY_FONT_REGULAR; 
export const ProjectPreviewText = isFirefox ? PRIMARY_FONT_BOLD_Firefox : PRIMARY_FONT_BOLD;