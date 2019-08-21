import React from 'react';
import { LogoWrapper, LogoDefault, LogoEmphasis } from './styles';

const TextLogo: React.FC = () => {
  return ( 
      <LogoWrapper>
        <LogoDefault>kristen</LogoDefault>
        <LogoEmphasis>e</LogoEmphasis>
        <LogoDefault>moran</LogoDefault>
      </LogoWrapper>
  );
}

export default TextLogo;
