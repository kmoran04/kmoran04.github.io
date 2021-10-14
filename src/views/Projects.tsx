import React from 'react';
import { ProjectsWrapper, PageHeader, OffsetAnchor } from './styles/styles';
import { AboutWrapper, ResumeItemTitle, ResumeItemSubtitle, Photo, Paragraph } from './styles/aboutStyles';
import { ProjectsContentWrapper, ProjectsPaddingWrapper } from './styles/projectsStyles';
import ProjectPreview from '../components/ProjectPreview/ProjectPreview';

const digitalDetoxDescription = 'Built in under 12 hours, this application is a response to the prompt of digital health. Instead of going the wearable tech route, I decided to explore how to take a break \
from technology -- using technology. Soft music, the night sky, and no one around to read what you write offers a sanctuary in a world otherwise dominated by fights in the comments section. An antidote to social media, \
if you will.'

const teachMeDescription = 'An application that aims to connect coworkers through common interests - a peer to peer skill-sharing system. I designed and built the front end to reduce the barriers-to-entry \
that can put people off from reaching out. A simple, friendly "teach me how to" prompt encourages the user to search for the skill they want to learn. A clean display of coworkers who have volunteered \
to teach the skill and planned integration with Slack make it easy \
to reach out to a teacher and start learning!';

const youAreHearDescription = 'How well do you know the music of the world? Put your skills to the test in this game, that selects the #1 song from the \
Spotify charts in 1 of 9 countries: Argentina, Hong Kong, Romania, the Netherlands, Panama, Japan, New Zealand, Ireland, and the USA. Click on the capital of the country that you think the song belongs to, and see how far off you are! Working in a team of 4, I focused on the Spotify API integration, \
and we all focused on the front end.';

const tTimeDescription = 'As a student in the Boston area, the most important information is where the unreliable T is in real-time, because the schedules never \
stay accurate for long. Using the Google Maps and MBTA APIs, I built a real-time T tracker that shows where every train is right now. Clicking on a train car will tell you which direction it is going, and what stop it is \
headed to. A countdown to refresh prevents overloading requests to the MBTA API. Limits on both APIs sometime result in no data being returned on load -- waiting a minute then manually refreshing should solve the issue.';

const Projects: React.FC = () => {
  return ( 
    <ProjectsWrapper id='projectsPage'>
        <PageHeader id='projects'>projects</PageHeader>
        <ProjectsContentWrapper>

        <ProjectsPaddingWrapper>
          <ResumeItemTitle>Digital Detox</ResumeItemTitle>
          <ResumeItemSubtitle>Personal project</ResumeItemSubtitle>
          <Paragraph>{digitalDetoxDescription}</Paragraph>
          <ProjectPreview url='https://www.kristenemoran.com/DigitalDetox/' src='../../digitaldetox.png' hoverText='Built with TypeScript, React, and StyledComponents. Built in under 12 hours.'/>
        </ProjectsPaddingWrapper>

        <ProjectsPaddingWrapper>
          <ResumeItemTitle>Teach Me How To</ResumeItemTitle>
          <ResumeItemSubtitle>Cogo Labs Intern Hackathon, 2nd place</ResumeItemSubtitle>
          <Paragraph>{teachMeDescription}</Paragraph>
          <ProjectPreview url='https://www.kristenemoran.com/TeachMeHowTo/' src='../../teachmehowto.png' hoverText='Built with TypeScript, React, and StyledComponents. Built in 9 hours.'/>
        </ProjectsPaddingWrapper>
        </ProjectsContentWrapper>
    </ProjectsWrapper>
  );
}

export default Projects;
