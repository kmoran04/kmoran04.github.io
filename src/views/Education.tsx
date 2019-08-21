import React from 'react';
import { PageHeader, EducationWrapper } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, ResumeItemDate, ResumeItemInfo, Paragraph, PhotoWrapper, Photo } from './styles/aboutStyles';

const Education: React.FC = () => {
  return (
    <EducationWrapper id='educationPage'>
      <PageHeader id='education'>education</PageHeader>
      <AboutWrapper>
        <ResumeItemTitle>BS, Computer Science</ResumeItemTitle>
        <ResumeItemSubtitle>Tufts University</ResumeItemSubtitle>
        <ResumeItemDate>Degree expected May 2020</ResumeItemDate>
        <ResumeItemInfo>GPA: 3.76/4.0</ResumeItemInfo>
      </AboutWrapper>

      <AboutWrapper>
        <ResumeItemTitle>Relevant Coursework</ResumeItemTitle>
        <ResumeItemSubtitle>Web Programming</ResumeItemSubtitle>
        <ResumeItemInfo>Project-based course building from
                    the foundations of HTML up through Javascript.</ResumeItemInfo>

        <ResumeItemSubtitle>Object-Oriented Programming for GUIs</ResumeItemSubtitle>
        <ResumeItemInfo>Focused on creating elegant, reusable UI components with Java.</ResumeItemInfo>

        <ResumeItemSubtitle>Introduction to Human Factors</ResumeItemSubtitle>
        <ResumeItemInfo>Theory-based course culminating in a UI/UX design project.</ResumeItemInfo>

      </AboutWrapper>


    </EducationWrapper>
  );
}

export default Education;
