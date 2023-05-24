import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
