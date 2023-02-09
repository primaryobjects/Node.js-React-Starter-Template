import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>

        <main className="flex-shrink-0">
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </main>

        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;