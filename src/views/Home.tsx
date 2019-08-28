import React, { useState, useEffect } from 'react';
import { HomeWrapper, WelcomeWrapper, SecondaryWrapper, ClosingWrapper, MainLogoWrapper, PageWrapper, Parallax, Wrapper, TopBorder, LandingPage, Filler, } from './styles/styles';
import NavBar from '../components/NavBar/NavBar';
import Projects from './Projects';
import HowIGotHere from './HowIGotHere';
import AboutMe from './AboutMe';
import Footer from '../components/Footer/Footer';
import TextLogo from '../components/TextLogo/TextLogo';
import scrollIntoView from 'scroll-into-view';
import Contact from './Contact';
import Education from './Education';


interface IHomeProps {
  toggleDarkMode: () => void;
}

const inView = (rect: ClientRect | DOMRect, height: number) => {
  return rect.top >= height / 2 - height;
}

const topView = (rect: ClientRect | DOMRect) => {
  return rect.top + 50 >= window.innerHeight;
}

const Home: React.FC<IHomeProps> = (props) => {

  useEffect(() => {
    window.history.replaceState(null, '', '/');
  }, []);

  const [selectedTab, setSelectedTab] = useState('');
  const [navBarTarget, setNavBarTarget] = useState('');
  const [isTop, setIsTop] = useState(false);

  const findSafari = () => {
    return navigator.userAgent.indexOf('Safari') != -1 &&
      navigator.userAgent.indexOf('Chrome') == -1;
  };

  const isSafari = findSafari();

  const scrollTop = (ev: React.MouseEvent<HTMLElement>) => {
    setNavBarTarget('top');
    window.history.replaceState(null, '', '/');
    const top = document.getElementById('top');
    top && scrollIntoView(top);
    setSelectedTab('');
    setTimeout(() => {
      setNavBarTarget('');
    }, 1000);
  }

  const onScroll =
    () => {
      const parallax = document.getElementById('parallax');
      const filler = document.getElementById('filler');

      const home = document.getElementById('home');
      const welcome = document.getElementById('welcome');
      const secondary = document.getElementById('secondary');
      const closing = document.getElementById('closing');

      if ( home && welcome && secondary && closing && parallax && filler) {
        if (home.scrollTop + 95 < window.innerHeight) {
          isTop && setIsTop(false);
        }
        else {
          !isTop && setIsTop(true);
        }
      }

      if (navBarTarget === '') {
        const projects = document.getElementById('projectsPage');
        const path = document.getElementById('pathPage');
        const about = document.getElementById('aboutPage');
        const contact = document.getElementById('contactPage');
        const education = document.getElementById('educationPage');

        if (projects && path && about && contact && education) {
          const projRect = projects.getBoundingClientRect();
          const pathRect = path.getBoundingClientRect();
          const aboutRect = about.getBoundingClientRect();
          const educationRect = education.getBoundingClientRect();
          const contactRect = contact.getBoundingClientRect();

          if (inView(aboutRect, aboutRect.height)) {
            if (topView(aboutRect)) {
              setSelectedTab('');
            }
            else {
              setSelectedTab('about');
            }
          }
          else if (inView(projRect, projRect.height)) {
            setSelectedTab('projects');
          }
          else if (inView(pathRect, pathRect.height)) {
            setSelectedTab('path');
          }
          else if (inView(educationRect, educationRect.height)) {
            setSelectedTab('education');
          }
          else if (inView(contactRect, contactRect.height)) {
            setSelectedTab('contact');
          }
          else {
            setSelectedTab('');
          }
        }
      }
    };

  return (

    <Wrapper onScroll={onScroll} id='home'>
      <HomeWrapper>
        <span id='top'></span>
        <LandingPage>
          <TopBorder />
          <MainLogoWrapper onClick={scrollTop}><TextLogo /></MainLogoWrapper>
          <WelcomeWrapper id='welcome' isTop={isTop}>welcome!</WelcomeWrapper>
          <SecondaryWrapper id='secondary' isTop={isTop}>i'm a front end developer.</SecondaryWrapper>
          <ClosingWrapper id='closing' isTop={isTop}>this is my website.</ClosingWrapper>
          <Filler id='filler' isTop={isTop}/>
          <Parallax id='parallax' isTop={isTop}/>
        </LandingPage>
        <NavBar
          setSelected={setSelectedTab}
          selected={selectedTab}
          setScroll={setNavBarTarget}
          toggleDarkMode={props.toggleDarkMode} />

        <PageWrapper >
          <AboutMe />
          <Projects />
          <HowIGotHere />
          <Education />
          <Contact />
          <Footer />
        </PageWrapper>

      </HomeWrapper>
    </Wrapper>
  );
}

export default Home;
