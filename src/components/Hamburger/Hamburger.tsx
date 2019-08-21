import React, { useState } from 'react';
import { HamburgerWrapper, HamburgerIcon, MenuItem, MenuWrapper } from './styles';
import scrollIntoView from 'scroll-into-view';


const Hamburger: React.FC = (props) => { 
    const [showMenu, setShowMenu] = useState(false);

const onclick = (ev: React.MouseEvent<HTMLElement>) => {
    const id = (ev.target as HTMLElement).title;
    const elem = document.getElementById(id);
    const offset = id === 'contact' ? 0 : 100;

    elem && scrollIntoView(elem, {
      align: { top: 0,
        topOffset: offset },
    });
    setShowMenu(!showMenu);
  }

const renderMenu = () => {
    return (<>
    <MenuItem title='about' onClick={onclick} > about me</MenuItem>
      <MenuItem title='projects' onClick={onclick}> projects</MenuItem>
      <MenuItem title='path' onClick={onclick} > how i got here</MenuItem>
      <MenuItem title='education' onClick={onclick}> education</MenuItem>
      <MenuItem title='contact' onClick={onclick}> contact me</MenuItem>
      </>)
}

const onClick = () => {
    setShowMenu(!showMenu);
}

  return (
    <HamburgerWrapper>
       <HamburgerIcon onClick={onClick}/>
       {showMenu ? <MenuWrapper> {renderMenu()} </MenuWrapper>: null}
    </HamburgerWrapper>
  );
}

export default Hamburger;
