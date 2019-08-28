import React, { useState } from 'react';
import { ToggleWrapper, DarkIcon, LightIcon } from './styles';
import ReactTooltip from 'react-tooltip';


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
    ReactTooltip.rebuild();
}

  return (
      <ToggleWrapper onClick={onToggle} data-tip='Dark Mode'>
        {isDarkMode ? <DarkIcon /> : <LightIcon />}
        <ReactTooltip effect='solid' type={isDarkMode ? `light` : `dark`}/>
    </ToggleWrapper>
  );
}

export default Toggle;
