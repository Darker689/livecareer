import React, { Component } from 'react';
// react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
// Pages
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
