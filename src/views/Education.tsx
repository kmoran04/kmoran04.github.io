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

        <ResumeItemSubtitle>Data Structures</ResumeItemSubtitle>
        <ResumeItemInfo>Topics include linked lists, trees, graphs, dynamic storage allocation, and recursion through major programming projects.</ResumeItemInfo>

        <ResumeItemSubtitle>Algorithms</ResumeItemSubtitle>
        <ResumeItemInfo>Strategies such as divide-and-conquer, greedy methods, and dynamic programming. Graph algorithms, sorting, searching, integer arithmetic, hashing, and NP-complete problems.</ResumeItemInfo>

        <ResumeItemSubtitle>Machine Structure & Assembly-Language Programming </ResumeItemSubtitle>
        <ResumeItemInfo>Structure of machine-level data and code, including memory, cache, registers, machine arithmetic, and bitwise operations.</ResumeItemInfo>

        <ResumeItemSubtitle>Programming Languages</ResumeItemSubtitle>
        <ResumeItemInfo> Emphasizes ideas and techniques most relevant to practitioners, but includes foundations crucial for intellectual rigor: abstract syntax, lambda calculus, type systems, dynamic semantics.</ResumeItemInfo>

        <ResumeItemSubtitle>Discrete Mathematics</ResumeItemSubtitle>
        <ResumeItemInfo>Sets, relations and functions, logic and methods of proof, combinatorics, graphs and digraphs.</ResumeItemInfo>

        <ResumeItemSubtitle>Introduction to Computer Security</ResumeItemSubtitle>
        <ResumeItemInfo>A systems perspective on host-based and network-based computer security, illustrated through hands-on programming projects.</ResumeItemInfo>

        <ResumeItemSubtitle>Game Design</ResumeItemSubtitle>
        <ResumeItemInfo>Processes, procedures, methodologies, and principles of game design. Managing teamwork, project scope and user experience.</ResumeItemInfo>

      </AboutWrapper>


    </EducationWrapper>
  );
}

export default Education;
