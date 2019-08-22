import React from 'react';
import { PageHeader, AboutMeWrapper } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, ResumeItemDate, ResumeItemInfo, Paragraph, PhotoWrapper, Photo } from './styles/aboutStyles';

const AboutMe: React.FC = () => {
  return ( 
    <AboutMeWrapper id='aboutPage'>
        <PageHeader id='about'>about me</PageHeader>
        <AboutWrapper>
          <PhotoWrapper>
          <Paragraph>I’m a senior at Tufts University studying Computer Science 
            who has discovered a passion for <b>front end development</b>, through which 
            I can combine my <b>background in graphic design</b> and my <b>studies in programming</b>. 
            Formal education in design principles and <b>UI/UX</b> has strengthened my design instincts 
            and allows me to build beautiful products from scratch. </Paragraph>
            <Photo src='/../webphoto.jpg'/>
            </PhotoWrapper>
        </AboutWrapper>
    </AboutMeWrapper>
  );
}

export default AboutMe;
