import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Articles from './components/Articles';
import Videos from './components/Videos';
import ThoughtOfTheDay from './components/ThoughtOfTheDay';
import Contact from './components/Contact';
import Announcements from './components/Announcements';
import logo from "./media/logo.png"

function App() {
  const videoLinks = [
    'https://www.youtube.com/embed/example1',
    'https://www.youtube.com/embed/example2',
    'https://www.youtube.com/embed/example1',
    'https://www.youtube.com/embed/example2',
    'https://www.youtube.com/embed/example1',
    'https://www.youtube.com/embed/example2',
    'https://www.youtube.com/embed/example1',
    'https://www.youtube.com/embed/example2',
  ];

  return (
    <div className="App">
      <Header logo={logo} />
      <Navigation />
      <main>
        <div className="horizontal-section">
          <ThoughtOfTheDay className="thought-section" />
          <Announcements className="announcements-section" />
        </div>
        <hr></hr>
        <Articles />
        <hr></hr>
        <Videos videoLinks={videoLinks} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
