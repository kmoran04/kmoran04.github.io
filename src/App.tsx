import React, { useState } from 'react';
import './App.css';
import Home from './views/Home';
import { ThemeProvider } from 'styled-components';
import lightMode from './constants/lightMode';
import darkMode from './constants/darkMode';

const App: React.FC = () => {

  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    stored === 'true' ? true : false
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', `${!isDarkMode}`);
  }
  
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Home toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

export default App;
