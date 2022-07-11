import React, { useEffect } from "react";
import './css/App.css';
import Header from './components/Header';
import Intro from './components/Intro'
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ReactComponent as BackgroundSvg } from './svg/background.svg';
import { ReactComponent as BackgroundSvgLight } from './svg/background-light.svg';
import { keepTheme } from "./components/Themes";

function App() {

  const [darkMode, setDarkMode] = React.useState(() => {
    let currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark-mode') {
      return true
    } else if(currentTheme === 'light-mode') {
      return false
    } else {
      return true
    }
  })

  useEffect(() =>  {
    keepTheme();
  })


  function setSvg() {
    setDarkMode(!darkMode);
  }

  console.log(darkMode);
  console.log(localStorage.getItem('theme'))

  return (
    <main className="App">
      <Header setSvg={setSvg}/>
      <Intro />
      <Project />
      <Skills />
      <Contact />
      <div id="bg">
        { darkMode ? <BackgroundSvg /> : <BackgroundSvgLight /> }
      </div>
    </main>
  );
}

export default App;