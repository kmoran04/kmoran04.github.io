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
        <ResumeItemInfo><ul>
          <ResumeBullet>Built features in React and TypeScript for a v1.1 release of a company-wide web app used by 150 employees every week</ResumeBullet>
          <ResumeBullet>Translated high-priority user pain points idenfitiied in usability testing into actionable user stories</ResumeBullet>
          <ResumeBullet>Collaborated across a team of designers and developers to create UI components that fulfill a mockup with team-wide code review</ResumeBullet>
          </ul></ResumeItemInfo>

        <ResumeItemTitle>Lead Graphic Designer</ResumeItemTitle>
        <ResumeItemSubtitle>TUSC Marketing at Tufts University</ResumeItemSubtitle>
        <ResumeItemDate>May 2017 - present</ResumeItemDate>
        <ResumeItemInfo><ul>
          <ResumeBullet>Collaborated constantly with other sub-groups of TUSC (Tufts University Social Collective) to create advertising and marketing plans for 100+ events for all 5000+ students</ResumeBullet>
          <ResumeBullet>Defined the visual brand of TUSC during the rebrand period, setting guidelines for other graphic designers and social media managers</ResumeBullet>
          <ResumeBullet>Applied the new brand identity to collateral, including infographics, T-shirts, custom Snapchat filters, event posters, and social media graphics</ResumeBullet>
          </ul>
        </ResumeItemInfo>

      </AboutWrapper>


    </PathWrapper>
  );
}

export default HowIGotHere;
