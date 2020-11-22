import React from 'react';
import './sass/main.scss';
import Header from './components/header'
import Navbar from './components/navbar'
import About from './components/about'
import Showcase from './components/Showcase'
import Blank from './components/Blank';
import Portfolio from './components/Portfolio';
function App() {
  return (

    <div >
      <Navbar/>
      <Header/>
      <About/>
      <Showcase/>
      <Blank/>
      <Portfolio/>
    
    </div>
  );
}

export default App;
