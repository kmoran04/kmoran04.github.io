import React from 'react';
import { PageHeader, PathWrapper, OffsetAnchor } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, ResumeItemDate, ResumeItemInfo, ResumeBullet } from './styles/aboutStyles';

const HowIGotHere: React.FC = () => {
  return (
    <PathWrapper id='pathPage'>
      <PageHeader id='path'>how i got here</PageHeader>

      <AboutWrapper>
        <ResumeItemTitle>Front End Engineer Intern, Web Team</ResumeItemTitle>
        <ResumeItemSubtitle>Cogo Labs in Cambridge, MA</ResumeItemSubtitle>
        <ResumeItemDate>June - August 2019</ResumeItemDate>
        <ResumeItemInfo>hey now!</ResumeItemInfo>

        <ResumeItemTitle>Lead Graphic Designer</ResumeItemTitle>
        <ResumeItemSubtitle>TUSC Marketing at Tufts University</ResumeItemSubtitle>
        <ResumeItemDate>May 2017 - present</ResumeItemDate>
        <ResumeItemInfo><ul>
          <ResumeBullet>Constant collaboration with other sub-groups of TUSC (Tufts University Social Collective) to create advertising and marketing plans for their events</ResumeBullet>
          <ResumeBullet>Defined the brand of TUSC during the rebrand period</ResumeBullet>
          <ResumeBullet>Applied the new brand identity to collateral, including infographics, T-shirts, custom Snapchat filters, event posters, and social media graphics</ResumeBullet>
          </ul>
        </ResumeItemInfo>
        <ResumeItemTitle>Orientation Coordinator, Social Media & Communications</ResumeItemTitle>
        <ResumeItemSubtitle>Office for Campus Life at Tufts University</ResumeItemSubtitle>
        <ResumeItemDate>June - September 2018</ResumeItemDate>
        <ResumeItemInfo>hey now!</ResumeItemInfo>

      </AboutWrapper>


    </PathWrapper>
  );
}

export default HowIGotHere;
