import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
        <Header/>
        <Home/>
        <About/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App