import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
const [currentPage, setCurrentPage] = useState('About')

  return (

<div className = "App">

<main>
  <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
  {currentPage === 'About' ? <About></About> : ''}
  {currentPage === 'Portfolio' ? <Portfolio></Portfolio> : ''}
  {currentPage === 'Resume' ? <Resume></Resume> : ''}
  {currentPage === 'Contact' ? <Contact></Contact> : ''}
  <Footer></Footer>
</main>


</div>
  );
}

export default App;

