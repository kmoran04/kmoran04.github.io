import React from 'react';
import { PageHeader, AboutMeWrapper } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, ResumeItemDate, ResumeItemInfo, Paragraph, PhotoWrapper, Photo, PhotoBox, ResumeLink } from './styles/aboutStyles';

const AboutMe: React.FC = () => {
  return ( 
    <AboutMeWrapper id='aboutPage'>
        <PageHeader id='about'>about me</PageHeader>
        <AboutWrapper>
          <PhotoWrapper>
          <Paragraph>I'm Kristen Moran -- the "e" is for my middle name, Emilie. I'm a recent graduate of Tufts University with a degree in Computer Science 
            who has discovered a passion for <b>front end development</b>, through which 
            I can combine my <b>background in graphic design</b> and my <b>studies in programming</b>. 
            Formal education in design principles and <b>UI/UX</b> has strengthened my design instincts 
            and allows me to build beautiful products from scratch. 
            <br/> <br/> Some of my passions include my "quarantine dog" Olive (pictured), my two family dogs (both yellow lab mixes), puzzles and escape rooms, 
            and experimenting in the kitchen.
            I love hands-on projects and tackling new challenges, from decorating cakes to DIY crafts to pottery painting. <br/> <br/> 
            While this whole website serves as both resume and portfolio, check out a printer-friendly copy of my resume  
            <ResumeLink href='/../resume-kmoran.pdf' target='_blank'> here!</ResumeLink></Paragraph>
            <Photo src='/../webphoto.png'/>
            </PhotoWrapper>
        </AboutWrapper>
    </AboutMeWrapper>
  );
}

export default AboutMe;
