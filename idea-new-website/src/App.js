import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navBar';
import { Landing } from './components/landing';
import { AboutMe } from './components/aboutMe';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Awards } from './awards';
import { Banner, LetsTalk } from './components/banner';
import { Conclusion } from './components/conclusion';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Landing/>
      <Banner/>
      <AboutMe/>
      <Experience/>
      <Projects />
      <Awards/>
      <LetsTalk/>
      <Conclusion/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
