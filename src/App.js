import React from 'react';
import './App.css';
import Community from './components/Community';
import Header from './components/Header';
import Followers from './components/Followers';
import Section from './components/Section';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';



function App() {
  return (
    <div>
     <Header/>
      <Community />
      <Followers />
      <Section />
      <Section2 />
      <Section3 />
      <Footer />
      
    </div>
  );
}

export default App;
