import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import { IndividualProject } from './components/Projects';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path='/IndividualProject' element={<IndividualProject/>}/>
      </Routes>
      <Footer />

  </Router>
  );
}

export default App;

function Main() {
  return <div className="App">
      <Home/>
      <AboutMe/>
      <Experience />
      <Projects />
  </div>
}
