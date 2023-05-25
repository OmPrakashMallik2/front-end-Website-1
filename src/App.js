import React from 'react';
import './App.css';
import Header from './HOME/Header';
import Content from './HOME/Content';
import Nav from './HOME/Nav';
import Footer from './HOME/Footer';
// import Login from './Login';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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

/* <Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
</Router> */
