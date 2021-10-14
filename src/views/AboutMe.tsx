import React from 'react';
import { PageHeader, AboutMeWrapper } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, ResumeItemDate, ResumeItemInfo, Paragraph, PhotoWrapper, Photo, PhotoBox, ResumeLink, EmphasisText } from './styles/aboutStyles';

const AboutMe: React.FC = () => {
  return ( 
    <AboutMeWrapper id='aboutPage'>
        <PageHeader id='about'>about me</PageHeader>
        <AboutWrapper>
          <PhotoWrapper>
          <Paragraph>I'm a recent graduate of Tufts University with a degree in Computer Science 
            who has discovered a passion for <b>front end development</b>, through which 
            I can combine my <b>background in graphic design</b> and my <b>studies in programming</b>. 
            Formal education in design principles and <b>UI/UX</b> has strengthened my design instincts 
            and allows me to build beautiful products from scratch. 
            <br/> <br/> 
            <EmphasisText>What I'm listening to:</EmphasisText> Sour by Olivia Rodrigo, Stuff You Should Know podcast by iHeartRadio <br/> <br/> 
            <EmphasisText>What I'm doing on weekends:</EmphasisText> playing with my "quarantine dog" Olive, baking new things, exploring the Boston area <br/> <br/> 
            <EmphasisText>What I'm trying now:</EmphasisText> sourdough from scratch, at home pottery, keeping houseplants alive <br/> <br/> 

            While this whole website serves as both resume and portfolio, check out a printer-friendly copy of my resume  
            <ResumeLink href='/../resume-kmoran.pdf' target='_blank'> here!</ResumeLink> <br/> <br/>
            Oh, and the <EmphasisText>e</EmphasisText> stands for Emilie.
            </Paragraph>
            
            <Photo src='/../webphoto.png'/>
            </PhotoWrapper>
        </AboutWrapper>
    </AboutMeWrapper>
  );
}

export default AboutMe;
