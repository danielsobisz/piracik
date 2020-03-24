import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import Header from './layouts/header'
import Main from './layouts/main'
import Contact from './layouts/contact'
import Footer from './layouts/footer'

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
