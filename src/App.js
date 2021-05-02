import './App.css';
import HomePage from './components/HomePage';
import Experience from './components/Projects';
import Education from './components/Education';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,500&display=swap" rel="stylesheet"/>
      </header>

      <body>
        <HomePage></HomePage>
        <Experience></Experience>
      </body>
    </div>
  );
}

export default App;
