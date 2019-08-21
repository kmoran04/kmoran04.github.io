import React, { useState } from 'react';
import { ToggleWrapper, DarkIcon, LightIcon } from './styles';

interface IToggleProps {
    toggleDarkMode: () => void;
}

const Toggle: React.FC<IToggleProps> = (props) => { 
const [isDarkMode, setDarkMode] = useState(false);

const onToggle = () => {
    setDarkMode(!isDarkMode);
    props.toggleDarkMode();
}

  return (
      <ToggleWrapper onClick={onToggle}>
        {!isDarkMode ? <DarkIcon /> : <LightIcon />}
    </ToggleWrapper>
  );
}

export default Toggle;
