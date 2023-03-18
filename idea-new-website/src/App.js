import { useState } from 'react';
import './App.css';
import { Navbar } from './components/navBar';
import { Landing } from './components/landing';
import { AboutMe } from './components/aboutMe';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Awards } from './awards';
import { Banner, LetsTalk } from './components/banner';
import { Conclusion } from './components/conclusion';
import { useEffect } from 'react';

function App() {

  const [pageYOffset, setpageYOffset] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setpageYOffset(window.pageYOffset)
    })
  }, []);

  return (
    <div className="App">
      <Navbar pageYOffset={pageYOffset}/>
      <Landing/>
      <Banner pageYOffset={pageYOffset}/>
      <AboutMe/>
      <Experience/>
      <Projects />
      <Awards/>
      <LetsTalk pageYOffset={pageYOffset}/>
      <Conclusion/>
    </div>
  );
}

export default App;
