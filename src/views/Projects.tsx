import React from 'react';
import { ProjectsWrapper, PageHeader, OffsetAnchor } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, Photo } from './styles/aboutStyles';
import { ProjectsContentWrapper, ProjectsPaddingWrapper } from './styles/projectsStyles';
import ProjectPreview from '../components/ProjectPreview/ProjectPreview';

const Projects: React.FC = () => {
  return ( 
    <ProjectsWrapper id='projectsPage'>
        <PageHeader id='projects'>projects</PageHeader>
        <ProjectsContentWrapper>
        <ProjectsPaddingWrapper>
          <ResumeItemTitle>Teach Me How To</ResumeItemTitle>
          <ResumeItemSubtitle>Cogo Labs Intern Hackathon, 2nd place</ResumeItemSubtitle>
          <ProjectPreview url='https://kmoran04.github.io/TeachMeHowTo/' src='../../teachmehowto.png' hoverText='Built with TypeScript, React, and StyledComponents. Built in 9 hours.'/>
        </ProjectsPaddingWrapper>
        <ProjectsPaddingWrapper>
          <ResumeItemTitle>You are Hear</ResumeItemTitle>
          <ResumeItemSubtitle>Web Programming Final Project</ResumeItemSubtitle>
          <ProjectPreview url='http://secure-temple-37776.herokuapp.com' src='../../youarehear.png' hoverText='Built with Javascript, HTML, and CSS. With the Spotify API.'/>
        </ProjectsPaddingWrapper>
        </ProjectsContentWrapper>
    </ProjectsWrapper>
  );
}

export default Projects;
