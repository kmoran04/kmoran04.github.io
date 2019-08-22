import React from 'react';
import { ContactWrapper, OffsetAnchor } from './styles/styles';
import TextLogo from '../components/TextLogo/TextLogo';
import { ContactHeader, SocialWrapper, ContactInfoWrapper, SocialLogoWrapper, ContactMedium, LinkedinIcon, EmailIcon, IconWrapper } from './styles/contactStyles';

const Contact: React.FC = () => {
  return (
    <ContactWrapper id='contactPage'>
      <ContactHeader id='contact'>contact me</ContactHeader>
      <SocialWrapper>

        <IconWrapper>
          <EmailIcon />
          <ContactInfoWrapper href='mailto:kristenemoran@gmail.com' target='' title='email'>
          <SocialLogoWrapper><TextLogo /></SocialLogoWrapper>
          <ContactMedium>@gmail.com</ContactMedium>
          </ContactInfoWrapper>
        </IconWrapper>

      <IconWrapper>
      <LinkedinIcon />
        <ContactInfoWrapper href='https://www.linkedin.com/in/kristenemoran' target='_blank' title='linkedin'>
          <ContactMedium>linkedin.com/in/</ContactMedium>
          <SocialLogoWrapper><TextLogo /></SocialLogoWrapper>
        </ContactInfoWrapper>
        </IconWrapper>

      </SocialWrapper>
    </ContactWrapper>
  );
}

export default Contact;
