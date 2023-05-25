import React from 'react';
import Header from './Header';
import Content from './Content';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
    <Header/>
    <Nav/>
    <Link to="log">click for Login Page</Link>
    <Content/>
    <Footer/>
</div>
  )
}

export default Home;
