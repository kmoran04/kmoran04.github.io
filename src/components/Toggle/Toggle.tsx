import React, { useState } from 'react';
import { ToggleWrapper, DarkIcon, LightIcon } from './styles';

interface IToggleProps {
    toggleDarkMode: () => void;
}

const Toggle: React.FC<IToggleProps> = (props) => { 

const stored = localStorage.getItem('isDarkMode');

const [isDarkMode, setDarkMode] = useState(
  stored === 'true' ? true : false
);

const onToggle = () => {
    setDarkMode(!isDarkMode);
    props.toggleDarkMode();
}

  return (
      <ToggleWrapper onClick={onToggle}>
        {isDarkMode ? <DarkIcon /> : <LightIcon />}
    </ToggleWrapper>
  );
}

export default Toggle;
