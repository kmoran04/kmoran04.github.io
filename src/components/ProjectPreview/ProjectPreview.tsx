import React from 'react';
import { ProjectPreviewWrapper, ProjectPhoto, ProjectPreviewOverlay } from './styles';

interface IProjectPreviewProps {
    src: string;
    url: string;
    hoverText: string;
}

const ProjectPreview: React.FC<IProjectPreviewProps> = (props) => {
  return (
    <ProjectPreviewWrapper href={props.url} target='_blank'>
        <ProjectPhoto src={props.src}/>
        <ProjectPreviewOverlay>{props.hoverText}
        </ProjectPreviewOverlay>
    </ProjectPreviewWrapper>
  );
}

export default ProjectPreview;
