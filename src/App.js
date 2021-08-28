import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <AboutMe/>
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
