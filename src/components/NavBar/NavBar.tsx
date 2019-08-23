import React from 'react';
import { NavBarWrapper, MenuOption } from './styles';
import scrollIntoView from 'scroll-into-view';
import Toggle from '../Toggle/Toggle';
import Hamburger from '../Hamburger/Hamburger';

interface INavBarProps {
  selected: string;
  setSelected: (selected: string) => void;
  setScroll: (scroll: string) => void;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<INavBarProps> = (props) => {
  const onclick = (ev: React.MouseEvent<HTMLElement>) => {
    const id = (ev.target as HTMLElement).title;
    props.setScroll(id);
    const elem = document.getElementById(id);
    const offset = id === 'contact' ? 0 : window.innerHeight / 8;

    

    elem && scrollIntoView(elem, {
      align: { top: 0,
        topOffset: offset },
    });

    props.setSelected(`${id}`);
    
    setTimeout(() => {
      props.setScroll('');
    }, 1000);
  }

  const isActive = (hash: string) => {
    return hash === props.selected;
  }

  return (
    // <> <NavBarPadding />
    <NavBarWrapper id='navbar'>
      <MenuOption title='about' onClick={onclick} isActive={isActive('about')}>about me</MenuOption>
      <MenuOption title='projects' onClick={onclick} isActive={isActive('projects')}>projects</MenuOption>
      <MenuOption title='path' onClick={onclick} isActive={isActive('path')}>how i got here</MenuOption>
      <MenuOption title='education' onClick={onclick} isActive={isActive('education')}>education</MenuOption>
      <MenuOption title='contact' onClick={onclick} isActive={isActive('contact')}>contact me</MenuOption>
      <Toggle toggleDarkMode={props.toggleDarkMode}/>
      <Hamburger />
    </NavBarWrapper>
   
  );
}

export default NavBar;
